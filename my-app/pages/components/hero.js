import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";

import girl from "../../public/girl.svg";
import { useAccount } from "wagmi";
import { useConnectModal, ConnectButton } from "@rainbow-me/rainbowkit";
import { connect, Connector, InjectedConnector } from "@wagmi/core";
import "@rainbow-me/rainbowkit/styles.css";

import {
  getDefaultWallets,
  darkTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import {
  configureChains,
  createClient,
  goerli,
  WagmiConfig,
  Chain,
} from "wagmi";

import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

export const mantle = {
  id: 5001,
  name: "Mantle Testnet",
  network: "mantle",
  iconUrl: "https://i.imgur.com/Q3oIdip.png",
  iconBackground: "#000000",
  nativeCurrency: {
    decimals: 18,
    name: "BIT",
    symbol: "BIT",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.mantle.xyz"],
    },
  },
  blockExplorers: {
    default: {
      name: "Mantle Testnet Explorer",
      url: "https://explorer.testnet.mantle.xyz",
    },
  },
  testnet: true,
};

const { chains, provider } = configureChains(
  [mantle, goerli],
  [
    jsonRpcProvider({
      rpc: (chain) => ({ http: chain.rpcUrls.default.http[0] }),
    }),
  ]
);
const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});
export default function Hero() {
  const { address, isConnecting, isDisconnected, isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();

  async function connectAndOpenResearch() {
    const result = await connect({
      connector: new InjectedConnector({ chains })
    });

    document.location.href = "../research/researchdiscovery";
  }

  function openResearch(){
    document.location.href="../research/researchdiscovery"
  }

  async function connectAndOpenLibrary() {
    const result = await connect({
      connector: new InjectedConnector({ chains }),
    });

    document.location.href = "../library/librarydiscovery";
  }

  function openLibrary(){
    document.location.href ="../library/librarydiscovery"
  }



  return (
    <div className="hero flex flex-col flex-wrap padding-[1rem] w-[100%] min-h-[100vh]  px-12 bg-[url('../public/Background.png')]  ">
      <span className="font-Michroma text-xl mt-4">SCHOLAR3</span>
      <div className=" absolute right-7 top-4">
        <ConnectButton />
      </div>

      <h1
        id="typewriter"
        className="  h-min font-Inconsolata font-extrabold text-[#2F2E41] text-center text-[5em] tracking-[1px] leading-[5.5rem] "
      >
        Upload Your{" "}
        <span className="text-[#4a44af]">
          <Typewriter
            options={{
              strings: ["Research Papers", "Books"],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
        to IPFS
      </h1>
      <div className=" border-red-500 flex justify-evenly mt-4">
        {address ? (
          <div className=" border-blue-500 flex">
            <button className="research font-Michroma self-center transition-all hover:bg-[#16161f] " onClick={() => openResearch()}>
              Research
            </button>
          </div>
        ) : (
          <div className=" border-blue-500 flex">
            <button
              className="research  font-Michroma self-center transition-all hover:bg-[#16161f] "
              onClick={() => connectAndOpenResearch()}
            >
              Research
            </button>
          </div>
        )}
        <div className=" border-blue-500">
          <Image src={girl} alt="girl reading" className="girl " />
        </div>
        {address?(        <div className="border-blue-500  flex">
          <button
            className="library font-Michroma self-center transition-all hover:bg-[#f3f3f3]"
            onClick={openLibrary}
          >
            Library
          </button>
        </div>):(
        <div className="border-blue-500  flex">
          <button
            className="library font-Michroma self-center transition-all hover:bg-[#f3f3f3] "
            onClick={connectAndOpenLibrary}
          >
            Library
          </button>
        </div>)}

      </div>
    </div>
  );
}
