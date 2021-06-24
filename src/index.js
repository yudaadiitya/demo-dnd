import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Desain1 from './Desain1';
import Home from './home';
import App from './App';
import Desain3 from './Desain3';
import * as serviceWorker from './serviceWorker';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGripVertical } from "@fortawesome/free-solid-svg-icons";
import SwipeToDelete from "react-swipe-to-delete-component";


library.add(faGripVertical);

// const data = [
//   {id: 1, text: 'End of summer reading list', date: '1.03.2016'},
//   {id: 2, text: 'Somewhere in the middle 📸', date: '23.01.2017'},
//   {id: 3, text: 'Good morning to 9M of you?!?! ❤️🙏🏻Feeling very grateful and giddy.', date: '12.01.2019'}
// ];

// const list = data.map(item => (
//   <SwipeToDelete key={item.id} item={item}>
//     <a className="list-group-item">
//       <h4 className="list-group-item-heading">{item.date}</h4>
//       <p className="list-group-item-text">{item.text}</p>
//     </a>
//   </SwipeToDelete>
// ));

// const App = (
//   <div className="list-group">
//     {list}
//   </div>
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* {app} */}
    {/* <Home /> */}
    {/* <Desain3 /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
