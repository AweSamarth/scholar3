import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { RESEARCH_CONTRACT_ADDRESS, abi } from "../../constants";
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
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";
import { mantle } from "../_app";
import { useContract } from "@thirdweb-dev/react";
import { watchContractEvent } from '@wagmi/core'
import { RESPONSE_LIMIT_DEFAULT } from "next/dist/server/api-utils";

const inter = Inter({ subsets: ["latin"] });
// if (account!=null){
// }
export default function Home() {
  const { address, isConnecting, isDisconnected, isConnected } = useAccount();
  useEffect(() => {
  }, []);

  useContractEvent({
    address: RESEARCH_CONTRACT_ADDRESS ,
    abi: abi,
    eventName: "ProfileCreated",
    listener(node, label, owner) {
      console.log(node, label, owner)
    },
    chainId: 1,
  })

  const [alreadyMember, setAlreadyMember] = useState(false);
  const { connect, connectors, isLoading, pendingConnector } = useConnect();
  const [name, setName] = useState("");
  const readViewResearcher = useContractRead({
    address: RESEARCH_CONTRACT_ADDRESS,
    abi: abi,
    functionName: "viewResearcher",
    args: [address],
  });

  

  const readOnesPapers = useContractRead({
    address: RESEARCH_CONTRACT_ADDRESS,
    abi: abi,
    functionName: "viewOnesPapers",
    args: [address],
  });


  function viewResearcher() {
    console.log(readViewResearcher);
  }


  const anarray = readOnesPapers.data
  // console.log(anarray)

  for(let i =0; i<anarray.length;i++){
    console.log(anarray[i])
  }

  function viewMyAddress() {
    console.log(address);
  }

  function nameChange(event) {
    setName(event.target.value);
  }
  function anotherChecker(){
    console.log(cidToPaper)
  }

  const newResearcherconfig = usePrepareContractWrite({
    address: RESEARCH_CONTRACT_ADDRESS,
    abi: abi,
    functionName: "newResearcher",
    args: [name],
  }).config;
  const newResearcher = useContractWrite(newResearcherconfig).write;

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
        <div>{"Hello " + readViewResearcher + "!"}</div>

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
          <button
            className="bg-blue-500 p-2 rounded-sm"
            onClick={() => newResearcher()}
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
          <button
            className="bg-blue-500 ml-3 p-2 rounded-sm"
            onClick={()=>viewPaper()}
          >testing
          </button>
        </div>
      </main>
    </>
  );
}
