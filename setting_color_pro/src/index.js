import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Demo from './Demo';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<App/>, document.getElementById('content'));
registerServiceWorker();
