## Smart Contract Addresses

**Library contract (on Goerli testnet): 0xB1f6ee6e58bE9ADd89A10b5426570Dbb8215a711**
this contract uses Chainlink pricefeeds to convert usd to eth. The author enters their book's price in usd and it get stored in the smart contract as an ETH value for buyers.

**Research contract (on Mantle testnet): 0xddab99b21E11D1A2DF42303Edd0BFaad648D0f52**
Mantle is an L2 network on top of Ethereum. Couldn't deploy our other contract to it because Chainlink pricefeeds don't exist on mantle testnet (yet)



## The problem Scholar3 solves
In today's world, researchers toil hard, collect their findings and write them down to form an organized body of work. They showcase their work to other people in the form of research papers. However, for their paper to actually be read by a substantial amount of people, they need to provide their papers to a publishing company / organization and they publish it for them. This company charges a fee that goes straight out of the researcher's pocket. Add to that, if anyone has to cite the researcher's work in a for-profit work, they have to take permission from the publishing company and pay them some royalty fees. This is exactly what Scholar3 aims to change.

Scholar3 gives researchers a platform to upload their research papers to IPFS, without involving any middlemen. Since they are uploaded to IPFS using Pinata as a pinning provider, data permanence is guaranteed. Anyone can upload their papers and it will be recorded on the blockchain. The content ids (CIDs) that they deploy are linked to their wallet address, thus always maintaining proof of originality. We are using the Mantle (testnet) network for the smart contract involved here.

We also have a library section where anyone can upload their books to IPFS. Similar to the research paper section, this section also links the CIDs of deployed book to the address that deployed them. It will also serve as a marketplace where the author puts in the price they want to charge in USD and the buyers see the price in ETH (thanks, Chainlink). The smart contracts involved here are deployed on the Goerli test network, since we can't use Chainlink price feeds on Mantle (yet).

## Challenges we ran into
There are a lot of challenges that we ran into, but fixing them was just as relieving as it was painful encountering them. We all learned a lot during the course of this hackathon.

We were having trouble using the useContractWrite() hook from wagmi because in React, calling hooks inside hooks is not allowed. This really took a lot of time to resolve since we were wondering what we could do instead. A friend of mine suggested that I should use the useContract() hook ti create and instance of the smart contract.and call that smart contract's methods on that hook. It worked and it also helped us to use async functions and do more stuff with the returned values

Using ThirdWeb's ipfs uploader also presented some errors - it did not support the Mantle network. We used a workaround but managed to fix the issue and get their uploader working. Uploading two files one after the other from the same drop-zone took some tinkering but in the end, we did it.

Since there are three devs in our team, we had some trouble keeping up with each other's commits on GitHub and had to resolve some merge conflicts. However, it was not too big of a deal and with teamwork, proper communication and coordination, we "pulled" through.
