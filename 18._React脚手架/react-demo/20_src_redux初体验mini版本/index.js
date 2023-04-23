//引入核心库
import React from 'react';
//引入react-dom核心库
import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom'
import App from './App';

import store from './redux/store';

/**
 * 解决路由切换样式丢失的问题
 * 1.在Html文件中引入的方式以/开头引入，默认pubilc下的资源
 * 2.使用%PUBLIC_URL%
 * 3.使用HashRouter
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <BrowserRouter>
        <App/>
    // </BrowserRouter>
);
// store.subscribe(() => {
//     root.render(<App/>)
//     // ReactDOM.render(<App/>,document.getElementById('root'))
// })


