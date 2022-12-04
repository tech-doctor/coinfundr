import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import {store} from '../Store'
import { WagmiConfig, createClient, configureChains, chain} from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { InjectedConnector } from 'wagmi/connectors/injected'


const { chains, provider, webSocketProvider } = configureChains(
  [chain.mainnet, chain.polygonMumbai],
  [publicProvider()],
)
 
const client = createClient({
  autoConnect: false,
  provider,
  webSocketProvider,
  connectors: [
    new InjectedConnector({chains, options:{name:'injected'}})
  ]
})

export default function App({ Component, pageProps }: AppProps) {
  return (
  <WagmiConfig client={client}> 
    <Provider store={store}>
        <Component {...pageProps}/>
    </Provider>
   </WagmiConfig>
  )
}
