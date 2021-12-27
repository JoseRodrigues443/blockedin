import { expect } from "chai";
import { ethers } from "hardhat";

describe("BlockedIn", function () {
  it("Should deploy blockedIn contract", async function () {
    const BlockedIn = await ethers.getContractFactory("BlockedIn");
    const greeter = await BlockedIn.deploy("Hello, world!");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
