const {ethers, network} = require("hardhat")

module.exports= async function({getNamedAccounts, deployments}){
    const {deploy, log} = deployments
    const {deployer} = await getNamedAccounts()
    await deploy("PriceConverter",{
        from:deployer,
        args:[],
        log:true
    })
}


module.exports.tags = ["priceconverter", "all"]