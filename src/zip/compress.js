import { pipeline } from "stream/promises";
import { createGzip } from "zlib";
import { createWriteStream, createReadStream } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const compress = async () => {
  const filesDir = join(dirname(fileURLToPath(import.meta.url)), "files");
  const filePath = join(filesDir, "fileToCompress.txt");
  const archivePath = join(filesDir, "archive.gz");

  const readableStream = createReadStream(filePath);
  const writableStream = createWriteStream(archivePath);

  try {
    await pipeline(readableStream, createGzip(), writableStream);
  } catch {
    throw Error("Something went wrong.");
  }
};

await compress();
