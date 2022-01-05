// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import * as fs from 'fs';

import { greeter } from "./deploy/greeter";
import { job } from "./deploy/job";
import { post } from "./deploy/post";

async function main() {
  const addresses: { [id: string] : string; } = {};
  addresses["greeter"] = await greeter("Hello, Hardhat!")
  addresses["post"] = await post()
  addresses["job"] = await job()

  saveEnv(addresses)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

function saveEnv(addresses: { [id: string]: string; }) {
  const contractsDir = __dirname + "/../artifacts/contracts";

  console.log(`Will save addresses in dir: ${contractsDir}`)

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + "/contract-address.json",
    JSON.stringify(addresses, undefined, 2)
  );
}

