import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Inconsolata } from "@next/font/google";
import { Michroma } from "@next/font/google";

const inc = Inconsolata({ weight:'900', style:'normal' ,subsets: ["latin"]});
const mich = Michroma({ weight:'400', subsets: ["latin"] })
import git from "../../public/gitIcon.svg"
import dis from "../../public/discord.svg"
import web from "../../public/web3dotjs.svg"


export default function Footer(){
    return(
        <footer className="w-[98.7vw] pl-8 ">
            <div className="foot-content">
            <h2 className="font-Michroma text-gray-100 font-bold mt-8">Scholar3</h2>
            <p className="font-Michroma" >Whether you're a student, researcher, or lifelong learner, we're committed to delivering an exceptional experience and making a positive impact in the world through our online library.</p>
            </div>
            <div className="logos flex gap-4">
            <Image src = {git} alt="github logo"/>
            <Image src = {dis} alt="discord logo"/>
            </div>
            <span>@2023 Scholar3, Inc.</span>
        </footer>
    )
}
