import '@/styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css';
import dynamic from 'next/dynamic'

import {
  getDefaultWallets,
  darkTheme,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, goerli, WagmiConfig, Chain } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';



export const mantle ={
  id:5001,
  name:"Mantle Testnet",
  network:"mantle",
  iconUrl:"https://i.imgur.com/Q3oIdip.png",
  iconBackground:"#000000",
  nativeCurrency:  {
    decimals:18,
    name:'BIT',
    symbol:'BIT'
  },
  rpcUrls:{
    default:{
      http:["https://rpc.testnet.mantle.xyz"]
    },
  },
  blockExplorers:{
    default:{name:"Mantle Testnet Explorer", url:"https://explorer.testnet.mantle.xyz"}
  },
  testnet:true

}



const { chains, provider } = configureChains(
  [mantle],
  [
    jsonRpcProvider({
      rpc:chain=>({http:chain.rpcUrls.default.http[0]})

    })
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

function App({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider chains={chains} theme={darkTheme()} modalSize="compact" initialChain={mantle}>
  <Component {...pageProps} />

  </RainbowKitProvider>
    </WagmiConfig>
  )
}
export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});