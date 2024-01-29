import { readFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { createHash } from "crypto";

const calculateHash = async () => {
  const filesDir = join(dirname(fileURLToPath(import.meta.url)), "files");
  const filePath = join(filesDir, "fileToCalculateHashFor.txt");

  const fileInfo = await readFile(filePath);
  const calcHash = createHash("sha256").update(fileInfo).digest("hex");
  console.log(calcHash);
};

await calculateHash();
