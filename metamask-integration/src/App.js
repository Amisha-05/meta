// src/App.js
import React, { useState } from "react";
import { useSDK } from "@metamask/sdk-react";
import "./App.css"; // Import the CSS file

function App() {
    const [walletId, setWalletId] = useState("");
    const { sdk, connected, disconnect } = useSDK(); // Add the disconnect function

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
            await disconnect(); // Call the disconnect function
            setWalletId(""); // Clear the wallet ID
        } catch (err) {
            console.error("Failed to disconnect:", err);
        }
    };

    return (
        <div className="dark-background"> {/* Apply dark background */}
            {!connected ? (
                <button 
                    onClick={handleConnect} 
                    className="button button-primary" // Apply the primary button style
                >
                    Connect with Wallet
                </button>
            ) : (
                <div>
                    <button 
                        disabled
                        className="button button-disabled" // Apply the disabled button style
                    >
                        {walletId}
                    </button>
                    <button 
                        onClick={handleDisconnect}
                        className="button button-secondary" // Apply the secondary button style for logout
                    >
                        Log Out
                    </button>
                </div>
            )}
        </div>
    );
}

export default App;
