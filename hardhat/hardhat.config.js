require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy")
require("@nomiclabs/hardhat-ethers")
require("dotenv").config()

const PRIVATE_KEY = process.env.PRIVATE_KEY
const GOERLI_RPC_URL= process.env.GOERLI_RPC_URL

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks:{
    "mantle-testnet":{
      url:"https://rpc.testnet.mantle.xyz/",
      chaindId:5001,
      accounts:[PRIVATE_KEY]
    },
    "goerli":{
      url:GOERLI_RPC_URL,
      chainId:5,
      accounts:[PRIVATE_KEY]
    }
  },
  namedAccounts:{
    deployer:{
        default:0,
    },
  }
  
};
