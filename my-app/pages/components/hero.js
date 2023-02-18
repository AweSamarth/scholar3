import React from "react";
import Image from "next/image";


import girl from "../../public/girl.svg"


export default function Hero(){

    return(
    <div className="hero flex flex-col flex-wrap padding-[1rem] w-[100%] h-[100%] px-12 bg-[url('../public/Background.png')]  ">
        <span className="font-Michroma text-xl mt-4">SCHOLAR3</span>
        <h1 className="font-Inconsolata font-extrabold text-[#2F2E41] text-center text-[6.5em] tracking-[1px] leading-[7rem] ">Gateway to a thousand worlds!</h1>
        <Image src = {girl} alt = "girl reading" className="girl"/>
        <div className="btn">
            <h4 className="font-Michroma">Get Started</h4>
            <div className="btn2">
            <button className="research font-Michroma" >Research</button>
            <button className="library font-Michroma">Library</button>
            </div>
        </div>
    </div>
    )
}