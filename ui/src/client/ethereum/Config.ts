import { ethers } from 'ethers'

// all the deployed contract addresses
import addresses from '../../../../blockchain/artifacts/contracts/contract-address.json'

// Contract data
import Post from '../../../../blockchain/artifacts/contracts/Post.sol/Post.json'
import Job from '../../../../blockchain/artifacts/contracts/Job.sol/Job.json'
import { Ethereum } from '../../utils/ethereumType';

// This is the Hardhat Network id, you might change it in the hardhat.config.js
// Here's a list of network ids https://docs.metamask.io/guide/ethereum-provider.html#properties
// to use when deploying to other networks.
const HARDHAT_NETWORK_ID = '31337';

// This is an error code that indicates that the user canceled a transaction
const ERROR_CODE_TX_REJECTED_BY_USER = 4001;

interface WalletData {
    // The info of the token (i.e. It's Name and symbol)
    tokenData: any,
    // The user's address and balance
    selectedAddress: any,
    // current user's balance
    balance: any,
    // The ID about transactions being sent, and any possible error with them
    txBeingSent: any,
    transactionError: any,
    networkError: any,
};

export class WalletConnection {
    ethereum: Ethereum;
    data: WalletData
    private _provider: ethers.providers.Web3Provider | undefined;
    private _token: ethers.Contract | undefined;

    constructor(ethereum: Ethereum) {
        this.ethereum = ethereum;
        this.data = {
            tokenData: undefined,
            selectedAddress: undefined,
            balance: undefined,
            txBeingSent: undefined,
            transactionError: undefined,
            networkError: undefined,
        }
    }


    async _connectWallet() {
        // This method is run when the user clicks the Connect. It connects the
        // dapp to the user's wallet, and initializes it.

        // To connect to the user's wallet, we have to run this method.
        // It returns a promise that will resolve to the user's address.
        const [selectedAddress] = await this.ethereum.enable();

        // Once we have the address, we can initialize the application.

        // First we check the network
        if (!this._checkNetwork()) {
            return;
        }

        this._initialize(selectedAddress);

        // We reinitialize it whenever the user changes their account.
        // window.ethereum.on("accountsChanged", ([newAddress]) => {
        //     this._stopPollingData();
        //     // `accountsChanged` event can be triggered with an undefined newAddress.
        //     // This happens when the user removes the Dapp from the "Connected
        //     // list of sites allowed access to your addresses" (Metamask > Settings > Connections)
        //     // To avoid errors, we reset the dapp state 
        //     if (newAddress === undefined) {
        //         return this._resetState();
        //     }

        //     this._initialize(newAddress);
        // });

        // We reset the dapp state if the network is changed
        // window.ethereum.on("networkChanged", ([networkId]) => {
        //     this._stopPollingData();
        //     this._resetState();
        // });
    }


    _initialize(userAddress: string) {
        // This method initializes the dapp

        // We first store the user's address in the component's state
        this.data.selectedAddress = userAddress;

        // Then, we initialize ethers, fetch the token's data, and start polling
        // for the user's balance.

        // Fetching the token data and the user's balance are specific to this
        // sample project, but you can reuse the same initialization pattern.
        this._initEthers();
        this._getTokenData();
        // this._startPollingData();
    }

    async _initEthers() {
        // We first initialize ethers by creating a provider using window.ethereum
        this._provider = new ethers.providers.Web3Provider(this.ethereum);

        // When, we initialize the contract using that provider and the token's
        // artifact. You can do this same thing with your contracts.
        // this._token = new ethers.Contract(
        //     contractAddress.Token,
        //     TokenArtifact.abi,
        //     this._provider.getSigner(0)
        // );
    }


    // The next two methods just read from the contract and store the results
    // in the component state.
    async _getTokenData() {
        if (this._token) {
            const name = await this._token.name();
            const symbol = await this._token.symbol();
            this.data.tokenData = { name, symbol };
        }
        return this.data.tokenData;
    }

    async _updateBalance() {
        if (this._token) {
            const balance = await this._token.balanceOf(this.data.selectedAddress);
            this.data.balance = balance;
        }
    }

    // This method sends an ethereum transaction to transfer tokens.
    // While this action is specific to this application, it illustrates how to
    // send a transaction.
    async _transferTokens(to: string, amount: string) {
        // Sending a transaction is a complex operation:
        //   - The user can reject it
        //   - It can fail before reaching the ethereum network (i.e. if the user
        //     doesn't have ETH for paying for the tx's gas)
        //   - It has to be mined, so it isn't immediately confirmed.
        //     Note that some testing networks, like Hardhat Network, do mine
        //     transactions immediately, but your dapp should be prepared for
        //     other networks.
        //   - It can fail once mined.
        //
        // This method handles all of those things, so keep reading to learn how to
        // do it.

        try {
            // If a transaction fails, we save that error in the component's state.
            // We only save one such error, so before sending a second transaction, we
            // clear it.
            this.data.transactionError = undefined;

            if (this._token) {
                // We send the transaction, and save its hash in the Dapp's state. This
                // way we can indicate that we are waiting for it to be mined.
                const tx = await this._token.transfer(to, amount);
                this.data.txBeingSent = tx.hash;

                // We use .wait() to wait for the transaction to be mined. This method
                // returns the transaction's receipt.
                const receipt = await tx.wait();

                // The receipt, contains a status flag, which is 0 to indicate an error.
                if (receipt.status === 0) {
                    // We can't know the exact error that made the transaction fail when it
                    // was mined, so we throw this generic one.
                    throw new Error("Transaction failed");
                }
            }

            // If we got here, the transaction was successful, so you may want to
            // update your state. Here, we update the user's balance.
            await this._updateBalance();
        } catch (error: any) {
            // We check the error code to see if this error was produced because the
            // user rejected a tx. If that's the case, we do nothing.
            if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) {
                return;
            }

            // Other errors are logged and stored in the Dapp's state. This is used to
            // show them to the user, and for debugging.
            console.error(error);
            this.data.transactionError = error;
        } finally {
            // If we leave the try/catch, we aren't sending a tx anymore, so we clear
            // this part of the state.
            this.data.txBeingSent = undefined;
        }
    }

    // This method checks if Metamask selected network is Localhost:8545 
    _checkNetwork() {
        if (this.ethereum.networkVersion === HARDHAT_NETWORK_ID) {
            return true;
        }

        this.data.networkError = "Please connect Metamask to Localhost:8545";

        return false;
    }
}