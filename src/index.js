import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'react-emotion';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        background: #fafafa;
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
