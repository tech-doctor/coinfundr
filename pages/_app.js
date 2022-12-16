import '../styles/globals.css'
import {
  chain,
  WagmiConfig,
  createClient,
  defaultChains,
  configureChains,
 } from 'wagmi'
 
 import { alchemyProvider } from 'wagmi/providers/alchemy'
 import { publicProvider } from 'wagmi/providers/public'
 
 import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
 import { InjectedConnector } from 'wagmi/connectors/injected'
 import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
 import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
 
import { Provider } from 'react-redux';
import {store} from '../Store'


const { chains, provider, webSocketProvider } = configureChains([chain.polygonMumbai],  [
  alchemyProvider({ apiKey: 'Bkc4cbKqtV3JX5PoLXjYhY5pj0IpkX5m' }),
  publicProvider()
])

const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    // new CoinbaseWalletConnector({
    //   chains,
    //   options: {
    //   appName: 'wagmi',
    //   },
    // }),
    // new WalletConnectConnector({
    //   chains,
    //   options: {
    //   qrcode: true,
    //   },
    // }),
    // new InjectedConnector({
    //   chains,
    //   options: {
    //   name: 'Injected',
    //   shimDisconnect: true,
    //   },
    // }),
  ],
  provider,
  webSocketProvider,
})

export default function App({ Component, pageProps }) {
  
  return (
    <WagmiConfig client={client}>
      <Provider store={store}>
          <Component {...pageProps}/>
      </Provider>
    </WagmiConfig>
  )
}
