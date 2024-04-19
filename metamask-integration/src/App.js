// src/App.js
import React, { useState } from "react";
import { useSDK } from "@metamask/sdk-react";
import "./App.css"; 

function App() {
    const [walletId, setWalletId] = useState("");
    const { sdk, connected, disconnect } = useSDK(); 

    const handleConnect = async () => {
        try {
            const accounts = await sdk?.connect();
            setWalletId(accounts?.[0]);
        } catch (err) {
            console.error("Failed to connect:", err);
        }
    };

    const handleDisconnect = async () => {
        try {
            await disconnect(); 
            setWalletId(""); 
        } catch (err) {
            console.error("Failed to disconnect:", err);
        }
    };

    return (
        <div className="dark-background"> 
            {!connected ? (
                <button 
                    onClick={handleConnect} 
                    className="button button-primary"
                >
                    Connect with Wallet
                </button>
            ) : (
                <div>
                    <button 
                        disabled
                        className="button button-disabled" 
                    >
                        {walletId}
                    </button>
                    <button 
                        onClick={handleDisconnect}
                        className="button button-secondary" 
                    >
                        Log Out
                    </button>
                </div>
            )}
        </div>
    );
}

export default App;
