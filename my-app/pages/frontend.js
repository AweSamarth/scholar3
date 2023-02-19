import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import {
  ConnectButton,
  midnightTheme,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { abi, RESEARCH_CONTRACT_ADDRESS } from "../constants";
import { Contract, providers, utils } from "ethers";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Login Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Martel+Sans&display=swap" rel="stylesheet"></link>
      </Head>
      <main className='flex flex-col justify-between items-center p-24 min-h-screen'>
        <div className={"display-inherit ,justify-inherit ,items-inherit, text-xs , w-full ,z-2 ,font-mono"}>
        <div className = "h-[100%] w-[35%] z-10 top-0 pt-[20px] flex justify-center absolute left-0 bg-[#2F2E41]"> 
          <div >
            <div>
          <Link href="/"><p className="text-[20px] ml-4 text-white font-Michroma h-0 mt-2 mb-[25%]">SCHOLAR3</p></Link>
          </div>
          <div >
              <Image
                className="h-[45em] w-[64em]"
                height={1000}
                width={700}
                style={{objectFit:"cover", objectPosition:"left" }}
                src="/textimg.webp"
              ></Image>
            </div></div>
          </div>
          <div className="h-[100%] w-[65%] absolute z-1 top-0 right-0 bg-[#cbcbcb]">
            <div>
              <div className={`flex flex-col justify-center items-center text-center `}>
                
                  <h2 className="mt-[18%] font-Inconsolata font-extrabold text-[40px] leading-[50px] pl-5 pb-8" >Create Researcher Profile!</h2>
                  <input
                    spellCheck="false" className="w-[310px] h-[34px] font-Inconsolata bg-white rounded-lg border-none font-medium text-base leading-12 text-center
                    "
                    type="text"
                    placeholder="Username"
                  />  
                  <br/>
                  <button className=" bg-[#2F2E41] rounded-lg w-[165px] h-[45px] font-Inconsolata font-semibold text-white text-center text-lg hover:bg-black transition-all ">Create Account</button>
                <Image className="mt-[10%]  h-[250px] w-[300px] border-none " src="/undrawPic.png" width={400} height={300}></Image>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
