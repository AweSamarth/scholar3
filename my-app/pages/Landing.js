import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { ConnectButton, midnightTheme, darkTheme } from "@rainbow-me/rainbowkit";
import { abi, RESEARCH_CONTRACT_ADDRESS } from "../constants";
import { Contract, providers, utils } from "ethers";
import Hero from "./components/hero";
import Hello from "./components/hello";
import Team from "./components/team";
import Footer from "./components/footer";
const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
    
      <main className="landing">
        
            <Hero />
            <Hello/>
            <Team/>
            <Footer/>
        </main>
    
  );
}
