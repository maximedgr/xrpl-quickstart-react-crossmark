import React, { useState, useEffect } from 'react';
import './App.css';
import sdk from "@crossmarkio/sdk";
import Header from './components/Header';
import DocumentationCard from './components/DocumentationCard';
import WalletConnect from './components/WalletConnect';

function App() {
  const [isInstalled, setIsInstalled] = useState<boolean | null>(null);

  useEffect(() => {
    const installed = sdk.sync.isInstalled();
    setIsInstalled(installed ?? null);
  }, []);

  const checkWallet = () => {
    const walletInstalled = sdk.sync.isInstalled();
    setIsInstalled(walletInstalled ?? false);
  };

  return (
    <div className="App">
      <div className="landing-page">
        <WalletConnect />
        <Header />
        <div className="card-container">
          <DocumentationCard />
        </div>
      </div>
    </div>
  );
}

export default App;
