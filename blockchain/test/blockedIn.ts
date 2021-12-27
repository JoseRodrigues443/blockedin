import { expect } from "chai";
import { ethers } from "hardhat";

describe("BlockedIn", function () {
  it("Should deploy blockedIn contract", async function () {
    const BlockedIn = await ethers.getContractFactory("BlockedIn");
    const blockedIn = await BlockedIn.deploy();
    await blockedIn.deployed();

    expect(await blockedIn.name()).to.equal("BlockedIn");
  });
});
