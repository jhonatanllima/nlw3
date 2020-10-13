import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Global from './themes/global';
import Routes from './routes';

function App() {
  return (
    <>
      <Global />
      <BrowserRouter basename={'/'}>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
