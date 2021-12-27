import { ethers } from "hardhat";

describe("BlockedIn", function () {
  it("Should deploy blockedIn contract", async function () {
    const BlockedIn = await ethers.getContractFactory("BlockedIn");
    const blockedIn = await BlockedIn.deploy();
    await blockedIn.deployed();

    // expect(await blockedIn.greet()).to.equal("Hello, world!");

    // const setGreetingTx = await blockedIn.setGreeting("Hola, mundo!");

    // // wait until the transaction is mined
    // await setGreetingTx.wait();

    // expect(await blockedIn.greet()).to.equal("Hola, mundo!");
  });
});
