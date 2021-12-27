//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract BlockedIn {

    string public name = "BlockedIn";

    struct Post {
        uint id;
        string description;
        string imgHash;
        uint tipAmount;
        address author;
    }

    uint public postCount;
    mapping(uint => Post) public posts;
}
