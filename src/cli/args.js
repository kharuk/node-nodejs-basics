const parseArgs = () => {
  const allArgs = process.argv.slice(2);

  const result = [];

  while (allArgs.length > 0) {
    const argName = allArgs.shift().slice(2);
    const argValue = allArgs.shift();

    result.push(`${argName} is ${argValue}`);
  }

  const stringifiedArgs = result.join(", ");
  console.log(stringifiedArgs);
};

parseArgs();
