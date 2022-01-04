// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

export async function greeter(message: string, contractName = "Greeter"): Promise<string> {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Factory = await ethers.getContractFactory(contractName);
  const contract = await Factory.deploy(message);

  await contract.deployed();

  console.log(`Contract ${contractName} deployed to: ${contract.address}`);
  return contract.address;
}
