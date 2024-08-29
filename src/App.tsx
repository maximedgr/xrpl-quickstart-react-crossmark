import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import DocumentationCard from './components/DocumentationCard';
import WalletConnect from './components/WalletConnect';
import Interactions from './components/Interactions';

function App() {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnectionChange = (connected: boolean) => {
    setIsConnected(connected);
  };

  return (
    <div className="App">
      <div className="landing-page">
        <WalletConnect onConnectionChange={handleConnectionChange} />
        <Header />
        <div className="card-container">
          {isConnected && <Interactions />}
          <DocumentationCard />
        </div>
      </div>
    </div>
  );
}

export default App;
