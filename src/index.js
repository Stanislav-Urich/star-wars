import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';


import App from './containers/app/App';
import store from './store/store';

import './style.css'
import ThemeProvider from './context/useTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Provider store={store}>
      <ThemeProvider >
        <App />
      </ThemeProvider>
    </Provider>

  </React.StrictMode>
);




