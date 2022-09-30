

import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import {  LAMPORTS_PER_SOL } from '@solana/web3.js';
import React, { useCallback, useState, useEffect } from 'react';
import { Button } from "@nextui-org/react";

export const GetBalance = () => {
    const { connection } = useConnection();
    const { publicKey } = useWallet();
    const [checkAmount, setAmount] = useState(0);

    const checkBalance = useCallback(async () => {
        if (publicKey != null){
            const walletBalance = await connection.getBalance(publicKey, 'confirmed');
            const walletBalanceSOL = (walletBalance / LAMPORTS_PER_SOL).toFixed(2);
            setAmount(walletBalanceSOL);
            console.log(walletBalanceSOL);
            console.log(publicKey);
        }
        else{
        }
    }, [connection, publicKey]);

    useEffect(() => {
        console.log('WalletBalance checked');
        checkBalance();
    }, [publicKey, checkBalance]);

    return (
        <Button light onPress={checkBalance}  ><p>{checkAmount} SOL</p></Button>
    );
};

