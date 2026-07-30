import { readdir, rename, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const imagesDirectory = path.resolve("public/images/tours");
const targetLongEdge = 1920;
const files = (await readdir(imagesDirectory))
  .filter((file) => /\.(jpe?g)$/i.test(file))
  .sort();

let originalBytes = 0;
let optimizedBytes = 0;

for (const file of files) {
  const inputPath = path.join(imagesDirectory, file);
  const temporaryPath = path.join(imagesDirectory, `.${file}.hd-tmp.jpg`);
  const before = await stat(inputPath);

  await sharp(inputPath)
    .rotate()
    .resize({
      width: targetLongEdge,
      height: targetLongEdge,
      fit: "inside",
      kernel: sharp.kernel.lanczos3,
      withoutEnlargement: false,
    })
    .sharpen({ sigma: 0.8, m1: 0.4, m2: 1.2 })
    .jpeg({
      quality: 88,
      progressive: true,
      mozjpeg: true,
      chromaSubsampling: "4:2:0",
    })
    .toFile(temporaryPath);

  await rename(temporaryPath, inputPath);

  const after = await stat(inputPath);
  originalBytes += before.size;
  optimizedBytes += after.size;
}

const megabytes = (bytes) => `${(bytes / 1024 / 1024).toFixed(1)} MB`;

console.log(
  `Imagens processadas: ${files.length}. Resolução máxima: ${targetLongEdge}px. ` +
    `Tamanho total: ${megabytes(originalBytes)} → ${megabytes(optimizedBytes)}.`,
);
