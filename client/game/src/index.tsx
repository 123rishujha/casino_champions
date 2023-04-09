import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ChakraProvider, ColorModeScript,theme } from '@chakra-ui/react';

import { store } from './redux/store';
import ColorModeSwitcher from './ColorModeSwitcher';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store} >
      <ColorModeScript/>
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher/>
      <App />
      </ChakraProvider>
    </Provider>
  </BrowserRouter>
);
