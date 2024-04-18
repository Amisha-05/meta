import React, { useState } from "react";
import { MetaMaskProvider, useSDK } from "@metamask/sdk-react";

function App() {
    const [walletId, setWalletId] = useState("");
    const { sdk, connected, connect } = useSDK();

    const handleConnect = async () => {
        try {
            const accounts = await sdk?.connect();
            setWalletId(accounts?.[0]);
        } catch (err) {
            console.error("Failed to connect:", err);
        }
    };

    const handleWalletIdClick = () => {
        // Implement the action when the wallet ID is clicked
        console.log("Wallet ID clicked");
    };

    return (
        <div className="App">
            {!connected ? (
                <button onClick={handleConnect}>Connect with Wallet</button>
            ) : (
                <button onClick={handleWalletIdClick}>{walletId}</button>
            )}
        </div>
    );
}

function WalletIdPage() {
    return <div>This is the Wallet ID page</div>;
}

function Root() {
    return (
        <MetaMaskProvider
            debug={true} // Set debug to true for development
            sdkOptions={{
                dappMetadata: {
                    name: "Your DApp Name",
                    url: window.location.href,
                },
            }}
        >
            <App />
        </MetaMaskProvider>
    );
}

export default Root;