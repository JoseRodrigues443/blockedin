// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { greeter } from "./deploy/greeter";
import { job } from "./deploy/job";
import { post } from "./deploy/post";

async function main() {
  await greeter("Hello, Hardhat!")
  await post()
  await job()
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
