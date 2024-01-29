const parseEnv = () => {
  const result = Object.keys(process.env)
    .filter((key) => key.startsWith("RSS_"))
    .map((envVariable) => `${envVariable}=${process.env[envVariable]}`)
    .join("; ");
  console.log(result);
};

parseEnv();
