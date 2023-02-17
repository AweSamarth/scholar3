import React from "react";
import Image from "next/image";


import girl from "../../public/girl.svg"


export default function Hero(){

    return(
    <div className="hero">
        <span className="font-Michroma">SCHOLAR3</span>
        <h1 className="font-Inconsolata font-black">Gateway to a thousand worlds!</h1>
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