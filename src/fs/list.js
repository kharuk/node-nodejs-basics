import { readdir } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const list = async () => {
  const filesDir = join(dirname(fileURLToPath(import.meta.url)), "files");

  try {
    const fileNames = await readdir(filesDir);
    console.log(fileNames);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await list();
