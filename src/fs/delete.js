import { unlink } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const remove = async () => {
  const filesDir = join(dirname(fileURLToPath(import.meta.url)), "files");
  const filePath = join(filesDir, "fileToRemove.txt");

  try {
    await unlink(filePath);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await remove();
