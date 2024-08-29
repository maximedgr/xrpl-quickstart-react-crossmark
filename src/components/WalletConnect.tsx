import React, { useState } from 'react';
import sdk from "@crossmarkio/sdk";
import crossmarkLogo from '../assets/crossmark.png';

const WalletConnect: React.FC = () => {
  const [isInstalled, setIsInstalled] = useState<boolean | null>(null);
  const [isConnected, setIsConnected] = useState<boolean | null>(null);

  const checkWalletInstallation = () => {
    const installed = sdk.sync.isInstalled();
    setIsInstalled(installed ?? false);
    return installed;
  };

  const handleClick = () => {
    if (isInstalled === null) {
      const installed = checkWalletInstallation();
      if (installed) {
        connectWallet();
      }
    } else if (isInstalled === false) {
      window.open('https://chromewebstore.google.com/detail/crossmark-wallet/canipghmckojpianfgiklhbgpfmhjkjg', '_blank');
    } else {
      connectWallet();
    }
  };

  const connectWallet = async () => {
    try {
      let id = await sdk.sync.signIn();
      if (id) {
        setIsConnected(true);
        console.log("Connected with ID:", id);
      } else {
        setIsConnected(false);
      }
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      setIsConnected(false);
    }
  };

  const getButtonText = () => {
    if (isInstalled === false) return 'Install Wallet First';
    if (isConnected === true) return 'Wallet Connected';
    return 'Connect Wallet';
  };

  const getButtonClass = () => {
    if (isInstalled === false) return 'connect-button install-needed';
    if (isConnected === true) return 'connect-button connected';
    return 'connect-button';
  };

  return (
    <div className="wallet-connect">
      <button 
        onClick={handleClick} 
        className={getButtonClass()}
        disabled={isConnected === true}
      >
        <img src={crossmarkLogo} alt="Crossmark Logo" className="crossmark-logo" />
        {getButtonText()}
      </button>
    </div>
  );
};

export default WalletConnect;

