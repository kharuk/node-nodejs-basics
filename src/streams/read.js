import { createReadStream } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const read = async () => {
  const filesDir = join(dirname(fileURLToPath(import.meta.url)), "files");
  const filePath = join(filesDir, "fileToRead.txt");

  const readableStream = createReadStream(filePath);
  readableStream.pipe(process.stdout);
};

await read();
