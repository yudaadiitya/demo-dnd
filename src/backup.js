import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Desain2 from './Desain2';
import Questions from "./questions";
import * as serviceWorker from './serviceWorker';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGripVertical } from "@fortawesome/free-solid-svg-icons";

library.add(faGripVertical);

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Desain2 />
    <Questions />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
