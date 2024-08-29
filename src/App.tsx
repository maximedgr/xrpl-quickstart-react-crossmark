import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import DocumentationCard from './components/DocumentationCard';
import WalletConnect from './components/WalletConnect';
import Interactions from './components/Interactions';
import { WalletProvider } from './context/WalletContext';
import AccountInformation from './components/AccountInformation';
import Footer from './components/Footer'; 

function App() {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnectionChange = (connected: boolean) => {
    setIsConnected(connected);
  };

  return (
    <WalletProvider>
      <div className="App">
        <div className="landing-page">
          <WalletConnect onConnectionChange={handleConnectionChange} />
          <Header />
          <div className="card-container">
            {isConnected && <AccountInformation />}
            {isConnected && <Interactions />}
            <DocumentationCard />
          </div>
          <Footer /> 
        </div>
      </div>
    </WalletProvider>
  );
}

export default App;
