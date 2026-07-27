# Destino Andes Chile

Site completo da Destino Andes Chile, criado com Next.js, React, TypeScript e CSS responsivo.

## Conteúdo

- homepage editorial;
- catálogo em `/chile/passeios`;
- filtros por categoria, duração, modalidade, temporada e faixa de preço;
- 14 páginas individuais de passeios;
- galerias, roteiros, inclusões, recomendações, clima, cancelamento e CTAs;
- páginas `/chile/como-funciona` e `/chile/faq`;
- preços centralizados em `app/data.ts`.

## Rodar localmente

Requer Node.js 22 ou superior.

```bash
npm install
npm run dev
```

Abra o endereço informado pelo terminal.

## Personalização

- Tours, preços, textos e imagens: `app/data.ts`
- Número de WhatsApp: constante `WHATSAPP` em `app/components.tsx` e links editoriais
- Estilos e identidade visual: `app/globals.css`
- Logo: `public/logo-destino-andes.png`
- Fotografias: `public/images/tours`

O campo de preço segue esta estrutura:

```ts
price: {
  clp: 50000,
  brlReference: 323,
  updatedAt: "2026-01-06",
  referenceOnly: true
}
```

Antes de publicar definitivamente, substitua o número demonstrativo `56900000000` pelo WhatsApp comercial real.
