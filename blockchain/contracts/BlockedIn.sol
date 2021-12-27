//SPDX-License-Identifier: GPL3
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "./UserBase.sol";

contract BlockedIn {

    string public name = "BlockedIn";

    struct Post {
        uint id;
        string description;
        string imgHash;
        uint tipAmount;
        UserBase author;
    }

    uint public postCount;
    mapping(uint => Post) public posts;
}
