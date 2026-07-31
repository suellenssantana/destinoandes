import { NextResponse } from "next/server";

const DESTINATION_EMAIL = "destinoandes.cl@gmail.com";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const attempts = new Map<string, { count: number; resetAt: number }>();

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isRateLimited(identifier: string) {
  const now = Date.now();
  const current = attempts.get(identifier);
  if (!current || current.resetAt <= now) {
    attempts.set(identifier, { count: 1, resetAt: now + 60 * 60 * 1000 });
    return false;
  }
  current.count += 1;
  attempts.set(identifier, current);
  return current.count > 5;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Newsletter notification is unavailable: RESEND_API_KEY is not configured.");
    return NextResponse.json({ error: "Serviço temporariamente indisponível." }, { status: 503 });
  }

  if (!(request.headers.get("content-type") ?? "").includes("application/json")) {
    return NextResponse.json({ error: "Solicitação inválida." }, { status: 415 });
  }

  let payload: { email?: unknown; website?: unknown; page?: unknown };
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Solicitação inválida." }, { status: 400 });
  }

  const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";
  const website = typeof payload.website === "string" ? payload.website.trim() : "";
  const page = typeof payload.page === "string" ? payload.page.slice(0, 300) : "Página não informada";

  if (website) {
    return NextResponse.json({ ok: true });
  }
  if (!email || email.length > 254 || !emailPattern.test(email)) {
    return NextResponse.json({ error: "Informe um e-mail válido." }, { status: 400 });
  }

  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const identifier = forwardedFor || request.headers.get("cf-connecting-ip") || "anonymous";
  if (isRateLimited(identifier)) {
    return NextResponse.json({ error: "Muitas tentativas. Aguarde e tente novamente." }, { status: 429 });
  }

  const safeEmail = escapeHtml(email);
  const safePage = escapeHtml(page);
  const subscribedAt = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "America/Sao_Paulo",
  }).format(new Date());

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.NEWSLETTER_FROM_EMAIL || "Destino Andes <onboarding@resend.dev>",
      to: [DESTINATION_EMAIL],
      reply_to: email,
      subject: `Nova inscrição na newsletter: ${email}`,
      text: `O e-mail ${email} se cadastrou para receber a newsletter da Destino Andes.\n\nData: ${subscribedAt}\nPágina de origem: ${page}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:620px;margin:auto;color:#17323a">
          <div style="background:#0e3a49;color:#fff;padding:24px 28px">
            <p style="margin:0;color:#e4bd63;font-size:12px;letter-spacing:2px">DESTINO ANDES</p>
            <h1 style="margin:10px 0 0;font-size:26px">Nova inscrição na newsletter</h1>
          </div>
          <div style="padding:28px;border:1px solid #ded8cc;border-top:0">
            <p style="font-size:17px;line-height:1.6"><strong>${safeEmail}</strong> se cadastrou para receber a newsletter.</p>
            <p style="color:#68777a;line-height:1.7"><strong>Data:</strong> ${subscribedAt}<br><strong>Página de origem:</strong> ${safePage}</p>
            <a href="mailto:${safeEmail}" style="display:inline-block;margin-top:12px;padding:13px 20px;background:#d29932;color:#17323a;text-decoration:none;font-weight:bold">Responder ao inscrito</a>
          </div>
        </div>
      `,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`Newsletter notification failed (${response.status}): ${errorText.slice(0, 500)}`);
    return NextResponse.json({ error: "Não foi possível concluir a inscrição agora." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
