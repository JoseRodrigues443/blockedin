import { ethers } from 'ethers'
import Post from './artifacts/contracts/Post.sol/Post.json'

// Update with the contract address logged out to the CLI when it was deployed 
const contractAddress = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9"

// request access to the user's MetaMask account
async function requestAccount() {
    if ("ethereum" in window && window.ethereum != undefined) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
    }
}
