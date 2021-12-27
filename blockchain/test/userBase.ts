import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("UserBase", () => {
  let owner: SignerWithAddress;

  beforeEach(async () => {
    [owner] = await ethers.getSigners();
  });

  const hashInformation: { profileHash: string } = {
    profileHash: "hash",
  };

  it("Should deploy UserBase contract", async () => {
    const UserBase = await ethers.getContractFactory("UserBase");
    const userBase = await UserBase.deploy(owner.address, hashInformation);
    await userBase.deployed();

    expect(await userBase.owner()).to.equal(owner.address);
    expect(await userBase.profileInformation()).to.equal(
      hashInformation.profileHash
    );
  });
});
