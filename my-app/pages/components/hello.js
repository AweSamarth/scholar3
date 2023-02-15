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
import book from "../../public/book.svg"
import v1 from "../../public/vector1.png"
import v2 from "../../public/vector2.png"


export default function Hello(){
    return(
        <div className="hello">
            <h2>/hello</h2>
            <div className="hello-content" {...mich.className}>
                <div><Image src = {book} className="book"/></div>
                <div>
                    <p>We are a dedicated group of individuals who believe that access to information and education should be available to everyone, and that it should be safe and secure.</p>
                    <p>Take back control from middlemen and truly own your work. Scholar3 uses IPFS to publish your work permanently and immutably on the internet.</p>
                    <p>Our library offers a vast collection of books, articles, and other educational materials, covering a wide range of subjects and topics. Whether you're a student, a researcher, or just someone who loves to learn, you'll find what you're looking for in our library.</p>
                    <p>We are committed to making our library accessible to all, regardless of background or location. That's why we have made our platform user-friendly and easy to use, with a simple interface that makes it easy to find what you're looking for.</p>
                </div>
            </div>
        </div>
    )
}