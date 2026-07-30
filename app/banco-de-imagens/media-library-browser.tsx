"use client";

import { useMemo, useState } from "react";

type MediaCategory = {
  slug: string;
  label: string;
  count: number;
  tags: string[];
};

type MediaItem = {
  id: string;
  src: string;
  alt: string;
  category: string;
  categories: string[];
  label: string;
  tags: string[];
  orientation: string;
  width: number;
  height: number;
};

const orientationLabels: Record<string, string> = {
  all: "Todos os formatos",
  landscape: "Horizontal",
  portrait: "Vertical",
  square: "Quadrada",
};

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();
}

export function MediaLibraryBrowser({
  categories,
  items,
}: {
  categories: MediaCategory[];
  items: MediaItem[];
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [orientation, setOrientation] = useState("all");
  const [copied, setCopied] = useState("");

  const filtered = useMemo(() => {
    const normalizedQuery = normalize(query.trim());

    return items.filter((item) => {
      const searchable = normalize(
        [item.label, item.alt, ...item.tags].join(" "),
      );
      return (
        (!normalizedQuery || searchable.includes(normalizedQuery)) &&
        (category === "all" || item.categories.includes(category)) &&
        (orientation === "all" || item.orientation === orientation)
      );
    });
  }, [category, items, orientation, query]);

  async function copyPath(item: MediaItem) {
    await navigator.clipboard.writeText(item.src);
    setCopied(item.id);
    window.setTimeout(() => setCopied(""), 1600);
  }

  return (
    <section className="media-library section">
      <div className="media-library-toolbar">
        <label className="media-search">
          <span>Buscar no acervo</span>
          <input
            type="search"
            placeholder="Ex.: neve, Santiago, vinícola…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>

        <label>
          <span>Tema</span>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="all">Todos os temas</option>
            {categories.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.label} ({item.count})
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>Formato</span>
          <select
            value={orientation}
            onChange={(event) => setOrientation(event.target.value)}
          >
            {Object.entries(orientationLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="media-library-results">
        <p>
          <strong>{filtered.length}</strong>{" "}
          {filtered.length === 1 ? "imagem encontrada" : "imagens encontradas"}
        </p>
        {(query || category !== "all" || orientation !== "all") && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("all");
              setOrientation("all");
            }}
          >
            Limpar filtros
          </button>
        )}
      </div>

      <div className="media-library-grid">
        {filtered.map((item) => (
          <article className="media-library-card" key={item.id}>
            <a href={item.src} target="_blank" rel="noreferrer">
              <img src={item.src} alt={item.alt} loading="lazy" />
            </a>
            <div>
              <p>{item.label}</p>
              <small>
                {orientationLabels[item.orientation]} · {item.width} × {item.height}
              </small>
              <div className="media-library-actions">
                <button type="button" onClick={() => copyPath(item)}>
                  {copied === item.id ? "Caminho copiado ✓" : "Copiar caminho"}
                </button>
                <a href={item.src} download>
                  Baixar
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {!filtered.length && (
        <div className="media-library-empty">
          Nenhuma imagem corresponde aos filtros. Tente outro tema ou termo.
        </div>
      )}
    </section>
  );
}
