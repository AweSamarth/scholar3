import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Inconsolata } from "@next/font/google";
import { Michroma } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { ConnectButton, midnightTheme, darkTheme } from "@rainbow-me/rainbowkit";
import { abi, RESEARCH_CONTRACT_ADDRESS } from "@/constants";
import { Contract, providers, utils } from "ethers";
const inc = Inconsolata({ weight:'900', style:'normal' ,subsets: ["latin"]});
const mich = Michroma({ weight:'400', subsets: ["latin"] })
import git from "../../public/gitIcon.svg"
import dis from "../../public/discord.svg"
import web from "../../public/web3dotjs.svg"


export default function Footer(){
    return(
        <footer>
            <div className="foot-content">
            <h2 className={inc.classname}>Scholar3</h2>
            <p className= {mich.className}>Whether you're a student, researcher, or lifelong learner, we're committed to delivering an exceptional experience and making a positive impact in the world through our online library.</p>
            </div>
            <div className="logos">
            <Image src = {git}/>
            <Image src = {dis}/>
            <Image src = {web}/>
            </div>
            <span>@2023 Scholar3, Inc.</span>
        </footer>
    )
}
