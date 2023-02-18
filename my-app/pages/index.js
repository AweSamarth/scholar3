
import { Inter } from "@next/font/google";

import Hero from "./components/hero";
import Hello from "./components/hello";
import Team from "./components/team";
import Footer from "./components/footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    
      <main className="">
        
            <Hero />
            <Hello/>
            <Team/>
            <Footer/>
        </main>
    
  );
}
