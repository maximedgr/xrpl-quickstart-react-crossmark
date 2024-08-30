# XRPL - Crossmark Browser Wallet - React Template

This project provides a rapid development template for building applications on the [XRP Ledger (XRPL)](https://xrpl.org) using the [Crossmark](https://crossmark.io) Browser Wallet and React. Designed as a quickstart solution, it's particularly useful for hackathons, prototypes, and developers looking to jumpstart their XRPL projects.


## Features

1. **Wallet Connection**: Easily connect to the Crossmark Browser Wallet.
2. **Account Information Display**: View your current XRPL address and network details.
3. **Network Auto-update**: Automatically checks and updates network information every 5 seconds.
4. **Interactions**:
   - Get User Session
   - Sign Transactions
   - Submit Transactions
5. **WalletContext**: Access user's address throughout your app after wallet sign-in.

## Installation

To get started with this project, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/maximedgr/xrpl-react-crossmark-quickstart
   ```

2. Navigate to the project directory:
   ```
   cd xrpl-crossmark-react-template
   ```

3. Install the dependencies:
   ```
   npm install
   ```
   or if you're using yarn:
   ```
   yarn install
   ```

4. Start the development server:
   ```
   npm start
   ```
   or with yarn:
   ```
   yarn start
   ```

5. Open your browser and visit `http://localhost:3000` to view the application.

## Usage

1. Click on the "Connect Wallet" button to connect your Crossmark Browser Wallet.
2. Once connected, you'll see your account information and network details.
3. Use the interaction buttons to perform various actions on the XRPL.
4. Access the Crossmark SDK documentation for more detailed information on available features.

## WalletContext

This template uses React's Context API to provide easy access to the user's wallet address throughout the application after sign-in. Here's how to use it in your components:

```
import { useWallet } from './path/to/WalletContext';

const MyComponent = () => {
  const { address } = useWallet();

  return <div>Your XRPL address: {address}</div>;
};
```

The `WalletContext` provides:
- `address`: The user's XRPL address after successful sign-in.
- `setAddress`: A function to update the address (typically used internally by the WalletConnect component).  


## Dependencies

- React
- TypeScript
- Crossmark Browser Wallet SDK

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Credits

Based on a template from [Crossmark](https://crossmark.io).
You can find other templates on [Crossmark's GitHub](https://github.com/crossmarkio/starters/tree/core) for Next, Vue and Angular.

