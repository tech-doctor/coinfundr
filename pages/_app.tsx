import '../styles/globals.css';
import type { AppProps } from 'next/app';
import {
  //chain,
 ///allChains,
  WagmiConfig,
  createClient,
 // defaultChains,
  configureChains,
 } from 'wagmi';

 import {polygonMumbai} from 'wagmi/chains'
 
 import { alchemyProvider } from 'wagmi/providers/alchemy';
 import { publicProvider } from 'wagmi/providers/public';
 
 import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
 import { InjectedConnector } from 'wagmi/connectors/injected';
 import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
 import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
 
import { Provider } from 'react-redux';
import {store} from '../Store';

import  {getDefaultProvider}  from 'ethers'

const { chains, webSocketProvider } = configureChains([polygonMumbai],  [
  alchemyProvider({ apiKey: 'Bkc4cbKqtV3JX5PoLXjYhY5pj0IpkX5m' }),
  publicProvider()
])

const client = createClient({
  autoConnect: true,
  // connectors: [
  //   new MetaMaskConnector({ chains }),
  //   // new CoinbaseWalletConnector({
  //   //   chains,
  //   //   options: {
  //   //   appName: 'wagmi',
  //   //   },
  //   // }),
  //   // new WalletConnectConnector({
  //   //   chains,
  //   //   options: {
  //   //   qrcode: true,
  //   //   },
  //   // }),
  //   // new InjectedConnector({
  //   //   chains,
  //   //   options: {
  //   //   name: 'Injected',
  //   //   shimDisconnect: true,
  //   //   },
  //   // }),
  // ],
  provider: getDefaultProvider(),
  webSocketProvider,
})

export default function App({ Component, pageProps }:AppProps) {
  
  return (
    <WagmiConfig client={client}>
      <Provider store={store}>
        <Component {...pageProps}/>
      </Provider>
    </WagmiConfig>
  )
}
