import { mkdir, readdir, copyFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const copy = async () => {
  const currentDirname = dirname(fileURLToPath(import.meta.url));
  const srcFolder = join(currentDirname, "files");
  const targetFolder = join(currentDirname, "files_copy");

  try {
    await mkdir(targetFolder);
    const files = await readdir(srcFolder);
    files.map((file) =>
      copyFile(join(srcFolder, file), join(targetFolder, file))
    );
  } catch {
    throw new Error("FS operation failed");
  }
};

await copy();
