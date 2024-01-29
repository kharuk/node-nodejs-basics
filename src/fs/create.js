import { writeFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const data = "I am fresh and young";

const create = async () => {
  const filesDir = join(dirname(fileURLToPath(import.meta.url)), "files");
  const filePath = join(filesDir, "fresh.txt");

  try {
    await writeFile(filePath, data, { flag: "wx" });
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await create();
