import { pipeline } from "stream/promises";
import { Transform } from "stream";

const reverse = new Transform({
  transform(chunk, _, callback) {
    const reversedChunk = chunk.toString().split("").reverse().join("");
    this.push(reversedChunk);
    callback();
  },
});

const transform = async () => {
  try {
    await pipeline(process.stdin, reverse, process.stdout);
  } catch {
    throw Error("Something went wrong.");
  }
};

await transform();
