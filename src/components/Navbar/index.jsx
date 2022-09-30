import { Navbar, Text, Button } from '@nextui-org/react';
import { CreateDonationCampaign } from '../CreateDonationCampaign/index'
import { GetBalance } from "../WalletBalance/index"
import { AirdropSol } from "../AirdropSol/index"
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export const NavAppBar = () => {
    return (
        <div>
            <Navbar isBordered variant={'floating'}>
                <Navbar.Brand>
                🪴
                    <Text b color="inherit" hideIn="xs">
                        Donation hub
                    </Text>
                </Navbar.Brand>
                <Navbar.Content style={{alignContent: "flex-start"}}>
                    <GetBalance />
                    <CreateDonationCampaign />
                    <AirdropSol />
                </Navbar.Content>
                <WalletMultiButton />
            </Navbar>
        </div>
    );
};
