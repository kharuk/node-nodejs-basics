import { cpus } from "os";
import { fileURLToPath } from "url";
import { Worker } from "worker_threads";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const workerPath = path.join(__dirname, "worker.js");
const numberOfCPU = cpus().length;

const createWorker = (n) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(workerPath);
    worker.postMessage(n + 10);
    worker.on("message", (value) =>
      resolve({ status: "resolved", data: value })
    );
    worker.on("error", () => {
      reject({ status: "error", data: null });
    });
  });
};

const performCalculations = async () => {
  const workersArray = [];

  for (let i = 0; i < numberOfCPU; i++) {
    workersArray.push(createWorker(i));
  }

  const result = await Promise.allSettled(workersArray);
  console.log(result.map((key) => key["value"] || key["reason"]));
};

await performCalculations();
