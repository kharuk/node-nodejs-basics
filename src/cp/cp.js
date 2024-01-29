import { fork } from "child_process";
import { fileURLToPath } from "url";
import { dirname } from "path";

const spawnChildProcess = async (args) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const PATH = `${__dirname}/files/script.js`;
  fork(PATH, args, { stdio: [0, 1, 2, "ipc"] });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["someArgument1", "someArgument2"]);
