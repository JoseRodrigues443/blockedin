//SPDX-License-Identifier: GPL3
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@lukso/universalprofile-smart-contracts/contracts/UniversalProfile.sol";

contract UserBase is UniversalProfile {

    struct Information {
        string profileHash;
    }

    Information public profileInformation;

    constructor(address _newOwner, Information memory _profileInformation) UniversalProfile(_newOwner) {
        // Validate information
        profileInformation = _profileInformation;
    }

}
