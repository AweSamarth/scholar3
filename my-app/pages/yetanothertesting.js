import { useNetwork, useSwitchNetwork } from 'wagmi'
import {TailSpin} from "react-loader-spinner"
export default function App() {
  const { chain } = useNetwork()
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork()
    
  return (
    <>
<TailSpin
  height="80"
  width="80"
  color="#c3bfc4"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>    
      </>
  )
}