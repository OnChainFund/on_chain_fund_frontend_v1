import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { OnChainFundProvider } from '../context/OnChainFundContext'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      // This should be in a .env file
      serverUrl='https://cxyontubdpux.usemoralis.com:2053/server'
      appId='4JzqTnkeW893DTLKQFPneIi7lIJx80HjrfexWxj1'
    >
      <OnChainFundProvider>
        <Component {...pageProps} />
      </OnChainFundProvider>
    </MoralisProvider>
  )
}

export default MyApp
