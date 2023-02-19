import React from "react";
import Image from "next/image";

import book from "../../public/book.svg"


export default function Hello(){
    return(
        <div className="hello bg-cover bg-center bg-[#2F2E41] w-screen h-auto text-white">
            <h2 className=" font-Inconsolata font-black text-7xl p-2">/our mission</h2>
            <div className="hello-content font-Inter flex flex-row justify-center" >
                <div className="basis-11/12 m-auto pl-6  items-center"><Image src = {book} className="book " alt="book"/></div>
                <div className="flex flex-col flex-wrap justify-center items-center mr-6">
                <div className="basis-1/2 text-base flex ">
                    <div className="flex h-min self-center">Our library offers a vast collection of books, articles, and other educational materials, covering a wide range of subjects and topics. Whether you're a student, a researcher, or just someone who loves to learn, you'll find what you're looking for in our library.</div>
                    </div>
                <div className="basis-1/2 text-base flex ">
                    <div className="flex h-min self-center">We also allow users to upload their research on our platform with the help of IPFS in the backend.</div>
                </div>
                </div>
            </div>
        </div>
    )
}