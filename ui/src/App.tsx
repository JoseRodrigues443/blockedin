import React from 'react';
import Base from './views/Base';
import { ThemeProvider } from '@mui/material/styles';
import mdTheme from './themes/material';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={mdTheme}>
        <Base />
      </ThemeProvider>
    </div>
  );
}

export default App;
