import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { Inter } from "@next/font/google";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  RESEARCH_CONTRACT_ADDRESS,
  abi,
  LIBRARY_CONTRACT_ADDRESS,
  libraryAbi,
} from "../../constants";
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
  useSigner,
} from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";
import { mantle } from "../_app";
import { watchContractEvent } from "@wagmi/core";
import { RESPONSE_LIMIT_DEFAULT } from "next/dist/server/api-utils";
import { use } from "chai";

const inter = Inter({ subsets: ["latin"] });
// if (account!=null){
// }

export default function Home() {
  const [theChain, setTheChain] = useState("");
  const [authorName, setAuthorName] = useState("");
  const { chain } = useNetwork();
  const { chains, error, pendingChainId, switchNetwork } = useSwitchNetwork();
  // console.log(chains, switchNetwork)
  console.log(chain);
  const provider = useProvider();
  const { data: signer } = useSigner();
  useEffect(() => {
    if (chain) {
      if (chain.id != 5) {
        switchNetwork?.(5);
      }
    }
  }, [chains, chain]);

  const { address, isConnecting, isDisconnected, isConnected } = useAccount();

  const [alreadyMember, setAlreadyMember] = useState(false);
  const { connect, connectors, isLoading, pendingConnector } = useConnect();

  const contract = useContract({
    address: LIBRARY_CONTRACT_ADDRESS,
    abi: libraryAbi,
    signerOrProvider: signer || provider,
  });

  const authorViewer = async () => {
    try {
      const viewAuthor = await contract.viewAuthor(address);
      console.log(viewAuthor);
    } catch (error) {
      console.error(error);
    }
  };

  const viewMyAddress = () => {
    console.log(address);
  };

  const readOnesBooks = useContractRead({
    address: LIBRARY_CONTRACT_ADDRESS,
    abi: libraryAbi,
    functionName: "viewAuthorBooks",
    args: [address],
  });

  const readAllAuthors = useContractRead({
    address:LIBRARY_CONTRACT_ADDRESS,
    abi:libraryAbi,
    functionName:"viewAllAuthors"
  })

  const viewAllAuthors=()=>{
    console.log(readAllAuthors)
  }

  const bookViewer = async () => {
    try {
      const theAuthor = await contract.viewAuthor(address);
      const theCid = theAuthor.bookCidArray[0];
      console.log(theCid);
      const theBook = await contract.viewBook(theCid);
      console.log(theBook);
      const thePrice = ethers.utils.formatEther(theBook.priceInEth);
      console.log(thePrice);
    } catch (error) {
      console.error(error);
    }
  };

  const viewOnesBooks = () => {
    console.log(readOnesBooks.data);
  };

  const authorAdder = async () => {
    try {
      const addAuthor = await contract.newAuthor(authorName);
    } catch (error) {
      console.error(error);
    }
  };

  const nameChange = (event) => {
    setAuthorName(event.target.value);
  };

  const [title, setTitle] = useState("");

  const bookAdder = async () => {
    try {
      const addBook = await contract.addBook(
        "title",
        "description",
        "cid",
        "cover",
        222,
        "description"
      );
    } catch (error) {
      console.error(error);
    }
  };
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
          <div className="mb-8 mt-8">
            <label htmlFor="title" className=" font-[Inter] font-light text-lg">
              Enter your name
            </label>
            <input
              name="title"
              type="text"
              value={authorName}
              className="bg-gray-500 rounded-sm ml-4 h-7"
              onChange={nameChange}
            />
          </div>
          <div>
            <button
              className="bg-blue-500 p-2 rounded-sm"
              onClick={() => authorAdder()}
            >
              author adder
            </button>
          </div>
          <div>
            <Link href="/library/uploadbook">
            <button
              className="bg-blue-900 p-2 rounded-sm"
        
            >
              upload book
            </button>
          </Link>
          </div>

          <button
            className="bg-blue-500 ml-3 p-2 rounded-sm"
            onClick={() => viewMyAddress()}
          >
            mera address
          </button>
          <button
            className="bg-blue-500 ml-3 p-2 rounded-sm"
            onClick={() => viewBook()}
          >
            view book
          </button>
          <button
            className="bg-blue-500 ml-3 p-2 rounded-sm"
            onClick={() => viewOnesBooks()}
          >
            view ones books
          </button>
          <button
            className="bg-blue-500 ml-3 p-2 rounded-sm"
            onClick={() => authorViewer()}
          >
            authorviewer
          </button>
          <button
            className="bg-blue-500 ml-3 p-2 rounded-sm"
            onClick={() => bookViewer()}
          >
            bookviewer
          </button>
          <button
            className="bg-blue-500 ml-3 p-2 rounded-sm"
            onClick={() => viewAllAuthors()}
          >
            all author viewer
          </button>
        </div>
      </main>
    </>
  );
}
