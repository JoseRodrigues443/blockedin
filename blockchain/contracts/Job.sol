//SPDX-License-Identifier: GPL3
pragma solidity ^0.8.0;

import "hardhat/console.sol";

// implements the ERC721 standard
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Job is ERC721, ERC721URIStorage {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    mapping (uint256 => Descrition) private _jobData;

    struct Descrition {
        string title;
        string description;
        address employee;
        address company;
        uint256 startDate;
        uint256 endDate;
    }

    event Minted(
        address from,
        address to,
        uint256 tokenId,
        string tokenURI,
        Descrition description
    );


    // the name and symbol of the NFT respectively
    constructor() ERC721("Job", "NFT") {
        console.log("Constructor: Job created");
    }

    // Create a function to mint/create the NFT
    function createNFT(address receiver, string memory uri, string memory title, string memory description, uint256 startDate)
        public
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(receiver, newItemId);
        _setTokenURI(newItemId, uri);

        _jobData[newItemId] = Descrition(title, description, receiver, msg.sender, startDate, uint256(0));

        emit Minted(msg.sender, receiver, newItemId, uri, _jobData[newItemId]);

        // returns the id for the newly created token
        return newItemId;
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

}
