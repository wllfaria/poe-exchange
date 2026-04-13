import fs from "fs/promises";

const URL = "https://api.poe.watch/exchange/ratios?league=Mirage&game=poe1";
const OUTPUT = "public/rates.json";

async function main() {
  const res = await fetch(URL);

  if (!res.ok) {
    throw new Error(`Fetch failed: ${res.status}`);
  }

  const data = await res.json();
  const json = JSON.stringify(data);

  await fs.writeFile(OUTPUT, json + "\n");
  console.log("Updated rates.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
