//SPDX-License-Identifier: GPL3
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "./profiles/UserBase.sol";

contract Post {

    string public name;

    enum PostType { NEWS, POST, JOB_OFFER, EVENT }

    struct Post {
        uint id;
        string title;
        string description;
        string hash;
        address author;
        PostType postType;
    }

    event PostCreated(
        uint id,
        string title,
        string description,
        string hash,
        address author,
        PostType postType
    );

    uint public postCount;
    mapping(uint => Post) public posts;

    constructor() {
        name = "Post";
    }

    function writePost(string memory _title, string memory _description, string memory _hash, PostType _postType) public {
        // Make sure the post title exists
        require(bytes(_title).length > 0, "A title is necessary");
        // Make sure post description exists
        require(bytes(_description).length > 0, "A Description is necessary");
        // Make sure uploader address exists
        require(msg.sender!=address(0), "A author is necessary");
        // TODO: Make sure that the msg.send is the same as the Lukso Profile
        // require(msg.sender!=_author);

        // Increment post id
        postCount ++;

        // Add post to the contract
        posts[postCount] = Post(postCount, _title, _description, _hash, msg.sender, _postType);
        // Trigger an event
        emit PostCreated(postCount, _title, _description, _hash, msg.sender, _postType);
    }

}
