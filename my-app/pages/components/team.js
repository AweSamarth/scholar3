import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Inconsolata } from "@next/font/google";
import { Michroma } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { ConnectButton, midnightTheme, darkTheme } from "@rainbow-me/rainbowkit";
import { abi, RESEARCH_CONTRACT_ADDRESS } from "@/constants";
import { Contract, providers, utils } from "ethers";
import girl from "../../public/girl.png"
const inc = Inconsolata({ weight:'900', style:'normal' ,subsets: ["latin"]});
const mich = Michroma({ weight:'400', subsets: ["latin"] })
function Card(){
    return(
        <div className="card">
        </div>
    )
}
export default function Team(){
    return(
        <div className="team">
            <div className="meet">
                <h2 className={inc.className}>/meet the team</h2>
                <p className={mich.className}>Our team consists of individuals who are passionate about technology, books, and making the world a better place. We believe that with the power of blockchain, we can revolutionize the way people access and share knowledge.</p>
            </div>
            <div className="cards">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}