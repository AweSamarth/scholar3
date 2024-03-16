import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Inconsolata } from "@next/font/google";
import { Michroma } from "@next/font/google";
const inc = Inconsolata({ weight: "900", style: "normal", subsets: ["latin"] });
const mich = Michroma({ weight: "400", subsets: ["latin"] });
import me from "../../public/me.jpeg";
import samarth from "../../public/samarth.jpg";
import gagan from "../../public/gagan.jpg";
import madhav from "../../public/madhav.jpeg";

export default function Team() {
  return (
    <div className="team bg-gray-100 p-0 m-0 w-[98.5vw] ">
      <div className="meet flex flex-row  mt-0 ml-0 mb-16 p-8">
        <h2 className="font-Michroma font-black pl-4 ">
          /meet the team
        </h2>
        <p className="font-Michroma ">
          Our team consists of individuals who are passionate about technology,
          books, and making the world a better place. We believe that with the
          power of blockchain, we can revolutionize the way people access and
          share knowledge.
        </p>
      </div>

      <div className=" flex flex-row overflow-x-scroll w-[97vw] self-center m-4 ml-0 mt-8">
        <div class="flex justify-center w-[20rem] m-auto">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <div className="w-[320px] h-[320px] relative"> 
              <Image layout="fill" objectFit="cover" src = {samarth} alt="smexy" className="rounded-t-lg"/>
            </div>
            <div class="p-6">
              <h5 class="text-gray-900 text-xl mb-2 font-Michroma font-black">Samarth Saxena </h5>
              <p class="text-gray-700 text-base mb-4 font-Michroma">
                blockchain developer
              </p>
              <a href="https://github.com/AweSamarth">
              <button
                type="button"
                class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Github
              </button>
              </a>
            </div>
          </div>
        </div>

        <div class="flex justify-center w-[20rem] m-auto">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <div className="w-[320px] h-[320px] object-contain relative">
                <Image layout="fill" objectFit="cover" src = {me} alt="smexy" className="rounded-t-lg object-contain"/>
            </div>
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-Michroma font-black mb-2">Divij Kathuria</h5>
              <p class="text-gray-700 text-base mb-4 font-Michroma">
                frontend developer
              </p>
              <a href="https://github.com/dikapitacion">
              <button
                type="button"
                class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Github
              </button>
              </a>
            </div>
          </div>
        </div>

        <div class="flex justify-center w-[20rem] m-auto">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <div className="w-[320px] h-[320px] relative ">
              <Image layout="fill" objectFit="cover" src = {gagan} alt="smexy" className="object-contain rounded-t-lg"/>
            </div>
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-Michroma font-black mb-2">Gagan Chaudhary</h5>
              <p class="text-gray-700 text-base mb-4 font-Michroma">
                frontend developer
              </p>
              <a href="https://github.com/GaganChaudhary6378">
              <button
                type="button"
                class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
    

              >
                Github
              </button>
              </a>
            </div>
          </div>
        </div>

        <div class="flex justify-center w-[20rem] m-auto">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <div className="w-[320px] h-[320px] relative">
              <Image layout="fill" objectFit="cover" src = {madhav} alt="smexy" className="object-fill rounded-t-lg"/>
            </div>
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-Michroma font-black mb-2">Madhav Sharma</h5>
              <p class="text-gray-700 text-base mb-4 font-Michroma">
                designer
              </p>
              <a href="https://github.com/MadhavS1029">
              <button
                type="button"
                class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                
              >
                Github
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
