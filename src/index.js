import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthContext } from './Context/auth';

ReactDOM.render(
    <AuthContext>
    <App />
    </AuthContext>,
  document.getElementById('root')
);

