import { pipeline } from "stream/promises";
import { createGunzip } from "zlib";
import { createWriteStream, createReadStream } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const decompress = async () => {
  const filesDir = join(dirname(fileURLToPath(import.meta.url)), "files");
  const filePath = join(filesDir, "fileToCompress.txt");
  const archivePath = join(filesDir, "archive.gz");

  const readableStream = createReadStream(archivePath);
  const writableStream = createWriteStream(filePath);

  try {
    await pipeline(readableStream, createGunzip(), writableStream);
  } catch {
    throw Error("Something went wrong.");
  }
};

await decompress();
