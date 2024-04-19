// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MetaMaskProvider } from "@metamask/sdk-react";

ReactDOM.render(
    <React.StrictMode>
        <MetaMaskProvider
            debug={true} // Set debug to true for development
            sdkOptions={{
                dappMetadata: {
                    name: "Your DApp Name",
                    url: window.location.href,
                },
                // Add your Infura API key or other options here
            }}
        >
            <App />
        </MetaMaskProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
