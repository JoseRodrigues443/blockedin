import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { Job } from "../typechain";
import faker from "faker";
import { dateToBigNumber } from "../utils/DateConversions";
import { JobMintedEvent } from "../utils/JobMintedEvent";

describe("Job", () => {
  let owner: SignerWithAddress;
  let employee: SignerWithAddress;
  let job: Job;
  let event: JobMintedEvent;

  const title = faker.lorem.sentence();
  const description = faker.lorem.paragraph();
  const startDate = dateToBigNumber(faker.date.soon());
  const uri = faker.internet.url();

  beforeEach(async () => {
    [owner, employee] = await ethers.getSigners();

    event = {
      from: owner.address,
      to: employee.address,
      tokenId: 1,
      tokenURI: uri,
      description: {
        title: title,
        description: description,
        employee: employee.address,
        company: owner.address,
        startDate: startDate,
        endDate: 0
      }
    }
  });

  it("Should deploy Job contract", async () => {
    const Contract = await ethers.getContractFactory("Job");
    job = await Contract.deploy();
    await job.deployed();

    expect(job.address).to.not.equal(0x0);
    expect(job.address).to.not.equal("");
    expect(job.address).to.not.equal(null);
    expect(job.address).to.not.equal(undefined);
  });

  it("Should mint", async () => {
    const expectedTokenId = 1;

    expect(dateToBigNumber(new Date("2012.08.10"))).to.be.equal(1344553200);

    expect(await job.createNFT(employee.address, uri, title, description, startDate))
      .to.emit(job, "Minted")
      .withArgs(owner.address, employee.address, expectedTokenId, uri, Object.values(event.description));
  });
});
