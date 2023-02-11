require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy")
require("@nomiclabs/hardhat-ethers")
require("dotenv").config()

const PRIVATE_KEY = process.env.PRIVATE_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks:{
    "mantle-testnet":{
      url:"https://rpc.testnet.mantle.xyz/",
      accounts:[PRIVATE_KEY]
    }
  },
  namedAccounts:{
    deployer:{
        default:0,
    },
  }
  
};
