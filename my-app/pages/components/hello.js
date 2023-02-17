import React from "react";
import Image from "next/image";

import book from "../../public/book.svg"


export default function Hello(){
    return(
        <div className="hello">
            <h2 className=" font-Inconsolata font-black">/hello</h2>
            <div className="hello-content font-Michroma " >
                <div><Image src = {book} className="book" alt="book"/></div>
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