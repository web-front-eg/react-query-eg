import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import App2 from './App2';
import Root from './Root';

import WrapReactQueryClientProvider from './WebAPI';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <WrapReactQueryClientProvider>
      {/* <App /> */}
      {/* <App2 /> */}
      <Root />
    </WrapReactQueryClientProvider>
  </React.StrictMode>
);
