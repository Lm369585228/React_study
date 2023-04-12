//引入核心库
import React from 'react';
//引入react-dom核心库
import ReactDOM from 'react-dom/client';
import { BrowserRouter,HashRouter } from 'react-router-dom'
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

