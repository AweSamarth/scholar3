import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Inconsolata } from "@next/font/google";
import { Michroma } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { ConnectButton, midnightTheme, darkTheme } from "@rainbow-me/rainbowkit";
import { abi, RESEARCH_CONTRACT_ADDRESS } from "@/constants";
import { Contract, providers, utils } from "ethers";
import girl from "../../public/girl.svg"
const inc = Inconsolata({ weight:'900', style:'normal' ,subsets: ["latin"]});
const mich = Michroma({ weight:'400', subsets: ["latin"] })

export default function Hero(){

    return(
    <div className="hero">
        <span className={mich.className}>SCHOLAR3</span>
        <h1 className={inc.className}>Gateway to a thousand worlds!</h1>
        <Image src = {girl} alt = "girl reading" className="girl"/>
        <div className="btn">
            <h4 className={mich.className}>Get Started</h4>
            <div className="btn2">
            <button className="research"{...mich.className} >Research</button>
            <button className="library" {...mich.className}>Library</button>
            </div>
        </div>
    </div>
    )
}