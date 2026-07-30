import { createHash } from "node:crypto";
import { readdir, readFile, rm, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourceRoot = process.argv[2] ? path.resolve(process.argv[2]) : null;
const outputRoot = path.resolve("public/images/library");

if (!sourceRoot) {
  console.error(
    "Uso: npm run media:import -- /caminho/para/o/diretorio-extraido",
  );
  process.exit(64);
}

const categories = {
  AlgarroboIslaNegra: {
    slug: "algarrobo-isla-negra",
    label: "Algarrobo e Isla Negra",
    tags: ["litoral", "praia", "cultura", "algarrobo", "isla-negra"],
  },
  AndesSunset: {
    slug: "cordilheira-dos-andes",
    label: "Cordilheira dos Andes",
    tags: ["cordilheira", "andes", "montanha", "por-do-sol"],
  },
  Farellones: {
    slug: "farellones",
    label: "Farellones",
    tags: ["farellones", "neve", "montanha", "inverno"],
  },
  MotoSki: {
    slug: "motoski-na-neve",
    label: "Passeio de motoski na neve",
    tags: ["motoski", "neve", "aventura", "montanha", "inverno"],
  },
  ValleNevado: {
    slug: "valle-nevado",
    label: "Valle Nevado",
    tags: ["valle-nevado", "neve", "esqui", "montanha", "inverno"],
  },
  CajonDelMaipo_Embalse: {
    slug: "cajon-del-maipo-embalse-el-yeso",
    label: "Cajón del Maipo e Embalse El Yeso",
    tags: ["cajon-del-maipo", "embalse-el-yeso", "natureza", "montanha"],
  },
  CajonDelMaipo_Termas: {
    slug: "cajon-del-maipo-termas",
    label: "Cajón del Maipo e Termas",
    tags: ["cajon-del-maipo", "termas", "natureza", "montanha"],
  },
  ParqueSafari: {
    slug: "parque-safari",
    label: "Parque Safari",
    tags: ["parque-safari", "animais", "familia"],
  },
  Portillo: {
    slug: "portillo",
    label: "Portillo",
    tags: ["portillo", "laguna-del-inca", "neve", "montanha"],
  },
  Santiago: {
    slug: "santiago",
    label: "Santiago",
    tags: ["santiago", "cidade", "urbano"],
  },
  TemploBahai: {
    slug: "templo-bahai",
    label: "Templo Bahá’í",
    tags: ["templo-bahai", "arquitetura", "santiago"],
  },
  ValpoVinaDelMar: {
    slug: "valparaiso-vina-del-mar",
    label: "Valparaíso e Viña del Mar",
    tags: ["valparaiso", "vina-del-mar", "litoral", "praia"],
  },
  VinaAlyan: {
    slug: "vinicola-alyan",
    label: "Vinícola Alyan",
    tags: ["vinicola", "alyan", "vinho", "enoturismo"],
  },
  VinaConchaYToro: {
    slug: "vinicola-concha-y-toro",
    label: "Vinícola Concha y Toro",
    tags: ["vinicola", "concha-y-toro", "vinho", "enoturismo"],
  },
  VinaSantaRita: {
    slug: "vinicola-santa-rita",
    label: "Vinícola Santa Rita",
    tags: ["vinicola", "santa-rita", "vinho", "enoturismo"],
  },
  VinaUndurraga: {
    slug: "vinicola-undurraga",
    label: "Vinícola Undurraga",
    tags: ["vinicola", "undurraga", "vinho", "enoturismo"],
  },
};

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(entryPath)));
    else if (/\.(jpe?g|png)$/i.test(entry.name)) files.push(entryPath);
  }

  return files;
}

function categoryFor(relativePath) {
  const segments = relativePath.split(path.sep);
  if (segments.length === 1) {
    return relativePath.toLowerCase().endsWith(".png")
      ? categories.MotoSki
      : categories.CajonDelMaipo_Termas;
  }
  const nestedCategory = segments.find((segment) => categories[segment]);
  const category = categories[nestedCategory ?? segments[0]];

  if (!category) {
    throw new Error(`Categoria não configurada: ${relativePath}`);
  }

  return category;
}

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });

const files = (await walk(sourceRoot)).sort((a, b) => a.localeCompare(b));
const seenHashes = new Map();
const counters = new Map();
const items = [];

for (const inputPath of files) {
  const relativePath = path.relative(sourceRoot, inputPath);
  const category = categoryFor(relativePath);
  const input = await readFile(inputPath);
  const hash = createHash("sha256").update(input).digest("hex");
  const duplicate = seenHashes.get(hash);

  if (duplicate) {
    if (!duplicate.categories.includes(category.slug)) {
      duplicate.categories.push(category.slug);
      duplicate.tags = [...new Set([...duplicate.tags, ...category.tags])];
    }
    continue;
  }

  const number = (counters.get(category.slug) ?? 0) + 1;
  counters.set(category.slug, number);
  const id = `${category.slug}-${String(number).padStart(3, "0")}`;
  const directory = path.join(outputRoot, category.slug);
  const outputPath = path.join(directory, `${id}.webp`);
  await mkdir(directory, { recursive: true });

  const result = await sharp(input)
    .rotate()
    .resize({
      width: 1920,
      height: 1920,
      fit: "inside",
      kernel: sharp.kernel.lanczos3,
      withoutEnlargement: false,
    })
    .sharpen({ sigma: 0.8, m1: 0.4, m2: 1.2 })
    .webp({ quality: 80, effort: 4, smartSubsample: true })
    .toFile(outputPath);

  const orientation =
    result.width === result.height
      ? "square"
      : result.width > result.height
        ? "landscape"
        : "portrait";

  const item = {
    id,
    src: `/images/library/${category.slug}/${id}.webp`,
    alt: `${category.label} — imagem ${String(number).padStart(2, "0")}`,
    category: category.slug,
    categories: [category.slug],
    label: category.label,
    tags: category.tags,
    orientation,
    width: result.width,
    height: result.height,
  };

  seenHashes.set(hash, item);
  items.push(item);
}

const categorySummary = [...counters.entries()]
  .map(([slug, count]) => {
    const category = Object.values(categories).find((item) => item.slug === slug);
    return { slug, label: category.label, count, tags: category.tags };
  })
  .sort((a, b) => a.label.localeCompare(b.label, "pt-BR"));

await writeFile(
  path.join(outputRoot, "manifest.json"),
  `${JSON.stringify({ categories: categorySummary, items }, null, 2)}\n`,
);

console.log(
  `Banco criado com ${items.length} imagens únicas em ${categorySummary.length} categorias.`,
);
