import { createWriteStream } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const write = async () => {
  const filesDir = join(dirname(fileURLToPath(import.meta.url)), "files");
  const filePath = join(filesDir, "fileToWrite.txt");

  const writableStream = createWriteStream(filePath);
  process.stdin.pipe(writableStream);
};

await write();
