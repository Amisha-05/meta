// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MetaMaskProvider } from "@metamask/sdk-react";

ReactDOM.render(
    <React.StrictMode>
        <MetaMaskProvider
            debug={true} 
            sdkOptions={{
                dappMetadata: {
                    name: "Your DApp Name",
                    url: window.location.href,
                },
              
            }}
        >
            <App />
        </MetaMaskProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
