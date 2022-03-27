import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { startMockAPI } from './services/mockAPI';

if (process.env.REACT_APP_MOCK_API) {
  startMockAPI();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
