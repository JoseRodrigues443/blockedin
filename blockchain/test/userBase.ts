import { expect } from "chai";
import { ethers } from "hardhat";

describe("UserBase", async function () {
  const [owner] = await ethers.getSigners();

  const hashInformation: { profileHash: string } = {
    profileHash: "hash",
  };

  it("Should deploy UserBase contract", async function () {
    const UserBase = await ethers.getContractFactory("UserBase");
    const userBase = await UserBase.deploy(owner.address, hashInformation);
    await userBase.deployed();

    expect(await userBase.owner).to.equal(owner);
    expect(await userBase.profileInformation).to.equal(hashInformation);
  });
});
