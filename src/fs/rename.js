import { rename as fsRename } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const rename = async () => {
  const filesDir = join(dirname(fileURLToPath(import.meta.url)), "files");
  const oldFilePath = join(filesDir, "wrongFilename.txt");
  const newFilePath = join(filesDir, "properFilename.md");

  try {
    await fsRename(oldFilePath, newFilePath);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await rename();
