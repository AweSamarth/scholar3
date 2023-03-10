import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { RESEARCH_CONTRACT_ADDRESS, researchAbi } from "../../constants";
import { Contract, providers, utils, BigNumber } from "ethers";
import {
  useAccount,
  useProvider,
  useContractRead,
  useConnect,
  usePrepareContractWrite,
  useContractWrite,
  useContractEvent
} from "wagmi";
import { useEffect, useState } from "react";
import { mantle } from "../_app";
const inter = Inter({ subsets: ["latin"] });
// if (account!=null){
// }
export default function Home() {
  let readViewResearcher
  useEffect(()=>{

  }, [])

  const [alreadyMember, setAlreadyMember] = useState(false);
  const { address, isConnecting, isDisconnected, isConnected } = useAccount();
  const { connect, connectors, isLoading, pendingConnector } = useConnect();
  const [name, setName] = useState("")
  readViewResearcher = useContractRead({
    address: RESEARCH_CONTRACT_ADDRESS,
    abi: researchAbi,
    functionName: "viewResearcher",
    args:[address]
  });

  const readOnesPapers = useContractRead({
    address:RESEARCH_CONTRACT_ADDRESS,
    abi: researchAbi,
    functionName:"viewOnesPapers",
    args:[address]
  })


  function viewResearcher(){
    console.log(readViewResearcher.data)
  }

  function viewPaper(){
    console.log()
  }

  function viewOnesPapers(){
    console.log(readOnesPapers.data)
  }
  function viewMyAddress(){
    console.log(address)
  }
  
   function nameChange(event){
     setName(event.target.value)
  }
  

  const newResearcherconfig = usePrepareContractWrite({
    address: RESEARCH_CONTRACT_ADDRESS,
    abi: researchAbi,
    functionName: "newResearcher",
    args: [name],
  }).config;  
  const {write}  =  useContractWrite(newResearcherconfig);
 
  

  // console.log(contractHua);

  return (
    <>
      <Head>
        <title>Samarth Ki Branch hai </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black border-2 border-red-600 h-[100vh] text-white">
        <div className="bg-black mt-4 mb-4 ml-4">
          <ConnectButton
            accountStatus={{
              smallScreen: "avatar",
              largeScreen: "full",
            }}
            showBalance={{
              smallScreen: false,
              largeScreen: true,
            }}
          />

        </div>

        <div className="font-extralight ml-4">
          <input type="text" value={name} onChange={nameChange} className=" bg-gray-800 rounded-md h-8 mr-4 select-none outline-none pl-2"/>
          <button
            className="bg-blue-500 p-2 rounded-sm"
            onClick={()=>write()}
          >
            writer
          </button>
          <button
            className="bg-blue-500 ml-3 p-2 rounded-sm"
            onClick={() => viewResearcher()}
          >
            view thing
          </button>
          <button
            className="bg-blue-500 ml-3 p-2 rounded-sm"
            onClick={() => viewMyAddress()}
          >
            mera address
          </button>
          <button
            className="bg-blue-500 ml-3 p-2 rounded-sm"
            onClick={() => viewOnesPapers()}
          >
            view papercid
          </button>
        </div>
      </main>
    </>
  );
}
