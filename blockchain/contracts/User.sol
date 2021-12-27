//SPDX-License-Identifier: GPL3
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "./UserBase.sol";

contract Profile is UserBase {

    constructor(address _newOwner, Information memory _profileInformation) UserBase(_newOwner, _profileInformation) {
    }

}
