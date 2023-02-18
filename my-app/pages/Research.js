import Head from "next/head";
import Image from "next/image";
import ResearchCard from "./components/ResearchCard";
import researchDataLog from "./data/researchDataLog";
import React from "react";
import { Martel } from "@next/font/google";
import {
  ConnectButton,
  midnightTheme,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { abi, RESEARCH_CONTRACT_ADDRESS } from "../constants";
import { Contract, providers, utils } from "ethers";
const martel = Martel({weight:"400", subsets: ["latin"] });

export default function Research() {
  const content = researchDataLog.map((item) => {
    return <ResearchCard key={item.id} {...item} />;
  });
  return (
    <>
      <Head>
        <title>Login Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link href="https://fonts.googleapis.com/css2?family=Martel+Sans&display=swap" rel="stylesheet"></link> */}
      </Head>
      <main className="rese">
        <div className="nav-com">
        <h2 className="header-el">SCHOLAR3</h2>
        <h2 className="lib-el">LIBRARY</h2>
        </div>
        <div className="cards-grids">{content}</div>
      </main>
    </>
  );
}
