import React from 'react';
import ReactDOM from 'react-dom';
import ReactApp from './index.helmet';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ReactApp />, document.getElementById('root'));

// If you want your apps to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
