import React from 'react';
import Base from './views/Base';
import { ThemeProvider } from '@mui/material/styles';
import mdTheme from './themes/material';
import { WalletConnection } from './client/ethereum/Config';
import ConnectToWallet from './views/ConnectToWallet';

function App() {
  let toShow = <Base />;
  if (window.ethereum) {
    window.wallet = new WalletConnection(window.ethereum);
  } else {
    toShow = <ConnectToWallet />
  }

  return (
    <div className="App">
      <ThemeProvider theme={mdTheme}>
        {toShow}
      </ThemeProvider>
    </div>
  );
}

export default App;
