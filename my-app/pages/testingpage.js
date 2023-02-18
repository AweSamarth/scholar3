import { useAccount } from 'wagmi'
 
export default function App() {
  const account = useAccount({
    onConnect({ address, connector, isReconnected }) {
      console.log('Connected', { address, connector, isReconnected })
    },
  })

  return(
   <div> {account.address}</div>
  )
}