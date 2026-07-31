"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiCheck, FiLink, FiMail, FiShare2, FiX } from "react-icons/fi";

type ShareDetails = {
  title: string;
  url: string;
};

export function ShareActions() {
  const pathname = usePathname();
  const rootRef = useRef<HTMLDivElement>(null);
  const copiedTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [details, setDetails] = useState<ShareDetails>({ title: "Destino Andes", url: "" });

  useEffect(() => {
    setOpen(false);
    setCopied(false);
    const update = () => setDetails({ title: document.title || "Destino Andes", url: window.location.href });
    update();
    const frame = window.requestAnimationFrame(update);
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
      if (copiedTimer.current) clearTimeout(copiedTimer.current);
    };
  }, []);

  const links = useMemo(() => {
    const title = encodeURIComponent(details.title);
    const url = encodeURIComponent(details.url);
    const message = encodeURIComponent(`${details.title}\n${details.url}`);
    return {
      whatsapp: `https://wa.me/?text=${message}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      x: `https://twitter.com/intent/tweet?text=${title}&url=${url}`,
      email: `mailto:?subject=${title}&body=${message}`,
    };
  }, [details]);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(details.url);
    } catch {
      const input = document.createElement("textarea");
      input.value = details.url;
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
    }
    setCopied(true);
    if (copiedTimer.current) clearTimeout(copiedTimer.current);
    copiedTimer.current = setTimeout(() => setCopied(false), 2200);
  };

  const shareNatively = async () => {
    if (navigator.share) {
      try {
        await navigator.share(details);
        setOpen(false);
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
      }
    }
    await copyLink();
  };

  return (
    <div className="global-share" ref={rootRef}>
      {open && (
        <div className="global-share-panel" role="dialog" aria-label="Compartilhar esta página">
          <div className="global-share-heading">
            <div>
              <strong>Compartilhe esta experiência</strong>
              <span>Envie para quem vai viajar com você</span>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Fechar opções de compartilhamento">
              <FiX />
            </button>
          </div>
          <div className="global-share-options">
            <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Compartilhar no WhatsApp">
              <span className="share-whatsapp"><FaWhatsapp /></span>
              WhatsApp
            </a>
            <a href={links.facebook} target="_blank" rel="noopener noreferrer" aria-label="Compartilhar no Facebook">
              <span className="share-facebook"><FaFacebookF /></span>
              Facebook
            </a>
            <a href={links.x} target="_blank" rel="noopener noreferrer" aria-label="Compartilhar no X">
              <span className="share-x"><FaXTwitter /></span>
              X
            </a>
            <a href={links.email} aria-label="Compartilhar por e-mail">
              <span className="share-email"><FiMail /></span>
              E-mail
            </a>
            <button type="button" onClick={copyLink} aria-label="Copiar endereço desta página">
              <span className={copied ? "share-copied" : "share-link"}>{copied ? <FiCheck /> : <FiLink />}</span>
              {copied ? "Copiado" : "Copiar link"}
            </button>
            <button type="button" onClick={shareNatively} aria-label="Abrir mais opções de compartilhamento">
              <span className="share-more"><FiShare2 /></span>
              Mais opções
            </button>
          </div>
        </div>
      )}
      <button
        className="global-share-trigger"
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? "Fechar opções de compartilhamento" : "Compartilhar esta página"}
      >
        {open ? <FiX /> : <FiShare2 />}
        <b>{open ? "Fechar" : "Compartilhar"}</b>
      </button>
    </div>
  );
}
