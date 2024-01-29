import { readFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const read = async () => {
  const filesDir = join(dirname(fileURLToPath(import.meta.url)), "files");
  const filePath = join(filesDir, "fileToRead.txt");

  try {
    const content = await readFile(filePath, "utf8");
    console.log(content);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await read();
