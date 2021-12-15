import React from 'react';
import Base from './views/Base';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const mdTheme = createTheme();

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
