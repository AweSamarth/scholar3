import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { RESEARCH_CONTRACT_ADDRESS, abi, LIBRARY_CONTRACT_ADDRESS, libraryAbi, researchAbi } from "../../constants";
import { Contract, providers, utils, BigNumber, Signer, ethers } from "ethers";

import {
  useAccount,
  useProvider,
  useContractRead,
  useConnect,
  usePrepareContractWrite,
  useContractWrite,
  useContractEvent,
  useContract,
  useSwitchNetwork,
  useNetwork,
  useSigner
} from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";


export default function DataLog(){
    const provider = useProvider()
    const {data:signer} = useSigner()
  const contract = useContract({
    address:RESEARCH_CONTRACT_ADDRESS,
    abi: researchAbi,
    signerOrProvider:signer||provider
  })

const [arrayOfCards, setArrayOfCards] = useState([])
    useEffect(()=>{
        async function getAllPapers(){
            let temparr=[]
            try {
                const allPapers = await contract.viewAllResearchCids()
                if (allPapers.length>0){
                for (let i=0; i<allPapers.length;i++){
                    const onePaper=await contract.cidToPaper(allPapers[i])
                    //this gives an object which has the researcher's address, title of the paper, upload date and paper cid

                    const researcherObj = await contract.viewResearcher(onePaper.theAddress)
                    const researcherName = researcherObj.name
                    const date = onePaper.uploadDate._hex
                    const title = onePaper.title
                    const id = onePaper.uploadDate._hex
                    const obj = {id:id, title:title, researcherName:researcherName, dop:date}
                    temparr.push(obj) 
                    // console.log(temparr)                  
                    }
                    setArrayOfCards(temparr)     

                }
                else{
                           
                    console.log(0)
                }
                // console.log(allPapers)

            } catch (error) {
                console.error(error)

            }
        }

        getAllPapers()
    }, [])

    function viewArrayOfCards(){
        console.log(arrayOfCards)
    }

    return(
        <div><button onClick={viewArrayOfCards}>somebutton</button></div>
        
    )
}



// export const something= [
//     {
//         id:1,
//         title:"n gram model",
//         researcherName:"Sam",
//         dop:"3 Dec,2022",
//     },
//     {
//         id:2,
//         title:"n gram model",
//         researcherName:"Sam",
//         dop:"3 Dec,2022",
//     },
//     {
//         id:4,
//         title:"n gram model",
//         researcherName:"Sam",
//         dop:"3 Dec,2022",
//     },
//     {
//         id:5,
//         title:"n gram model",
//         researcherName:"Sam",
//         dop:"3 Dec,2022",
//     },
//     {
//         id:6,
//         title:"n gram model",
//         researcherName:"Sam",
//         dop:"3 Dec,2022",
//     },
//     {
//         id:7,
//         title:"n gram model",
//         researcherName:"Sam",
//         dop:"3 Dec,2022",
//     },
//     {
//         id:8,
//         title:"n gram model",
//         researcherName:"Sam",
//         dop:"3 Dec,2022",
//     },
//     {
//         id:9,
//         title:"n gram model",
//         researcherName:"Sam",
//         dop:"3 Dec,2022",
//     },
//     {
//         id:10,
//         title:"n gram model",
//         researcherName:"Sam",
//         dop:"3 Dec,2022",
//     }
// ];