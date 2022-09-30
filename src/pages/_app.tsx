import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import {
    UnsafeBurnerWalletAdapter,
    PhantomWalletAdapter,
    GlowWalletAdapter,
    BackpackWalletAdapter,
    SolletWalletAdapter,
    SolflareWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import type { AppProps } from 'next/app';
import type { FC } from 'react';
import React, { useMemo } from 'react';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

// Use require instead of import since order matters
require('@solana/wallet-adapter-react-ui/styles.css');
require('../styles/globals.css');

const App: FC<AppProps> = ({ Component, pageProps }) => {
    // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
    const network = WalletAdapterNetwork.Devnet;

    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    const wallets = useMemo(
        () => [
            new PhantomWalletAdapter(),
            new BackpackWalletAdapter(),
            new GlowWalletAdapter(),
            new SolletWalletAdapter(),
            new SolflareWalletAdapter(),
            // new UnsafeBurnerWalletAdapter(),
        ],
        []
    );

    const DarkTheme = createTheme({
        type: 'dark',
        theme: {
          colors: {
            background: '#1d1d1d',
            text: '#fff',
            myDarkColor: '#ff4ecd'
          },
          space: {},
          fonts: {}
        }
      })

    return (
            <NextUIProvider theme={DarkTheme}>
                <ConnectionProvider endpoint={endpoint}>
                    <WalletProvider wallets={wallets} autoConnect>
                        <WalletModalProvider>
                            <Component {...pageProps} />
                        </WalletModalProvider>
                    </WalletProvider>
                </ConnectionProvider>
            </NextUIProvider>
    );
};

export default App;
