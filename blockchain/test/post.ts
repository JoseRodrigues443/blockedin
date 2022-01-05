import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { Post } from "../typechain";
import { PostType } from "../utils/PostType";
import faker from "faker";


describe("Post", () => {
  let owner: SignerWithAddress;
  let post: Post;

  const title = faker.lorem.sentence();
  const description = faker.lorem.paragraph();
  const uri = faker.internet.url();

  beforeEach(async () => {
    [owner] = await ethers.getSigners();
  });

  it("Should deploy post contract", async () => {
    const PostContract = await ethers.getContractFactory("Post");
    post = await PostContract.deploy();
    await post.deployed();

    expect(await post.postCount()).to.equal(0);

    expect(post.address).to.not.equal(0x0);
    expect(post.address).to.not.equal("");
    expect(post.address).to.not.equal(null);
    expect(post.address).to.not.equal(undefined);
  });

  it("Make a invalid post", async () => {
    await expect(post.writePost(
      '',
      description,
      uri,
      PostType.POST))
      .to.revertedWith("A title is necessary")

    await expect(post.writePost(
      title,
      '',
      uri,
      PostType.POST))
      .to.revertedWith("A Description is necessary")

    expect(await post.postCount()).to.equal(0);
  });

  it("Make a post", async () => {
    const expectedId = 1;
    expect(await post.writePost(
      title,
      description,
      uri,
      PostType.POST))
      .to.emit(post, "PostCreated")
      .withArgs(
        expectedId,
        title,
        description,
        uri,
        owner.address,
        PostType.POST);

    expect(await post.postCount()).to.equal(expectedId);
  });
});
