import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import {
  ConnectButton,
  midnightTheme,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { abi, RESEARCH_CONTRACT_ADDRESS } from "@/constants";
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
      {/* <main className={styles.main}>
        <div className={styles.description}>
          <div className={`${styles["split"]} ${styles["left"]}`}>
            <div className={styles.centered}>
              <Image
                className={styles.text1}
                height={900}
                width={700}
                src="/textimg.png"
              ></Image>
            </div>
          </div>
          <div className={`${styles["split"]} ${styles["right"]}`}>
            <div className={styles.centered}>
              <div className={styles.loginCard}>
                <form action="" method="">
                  <h2 className={styles.heading}>Welcome !</h2>
                  <input
                    className={styles.inputField}
                    type="text"
                    placeholder="Username"
                  />
                  <br></br>
                  <button className={styles.buttonEl1}>Add here</button>
                  <br></br>
                  <button className={styles.buttonEl2}>Create Account</button>
                </form>
                <Image className={styles.vector} src="/undrawPic.png" width={400} height={300}></Image>
              </div>
            </div>
          </div>
        </div>
      </main> */}
    </>
  );
}
