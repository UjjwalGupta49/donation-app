import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import type { NextPage } from 'next';
import { Button } from '@nextui-org/react'
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import styles from '../styles/Home.module.css';
import components from "../components/index"

const Home: NextPage = () => {
    return (
        <div>
            <div>
                <components.NavAppBar />
            </div>
            
        </div>
    );
};

export default Home;
