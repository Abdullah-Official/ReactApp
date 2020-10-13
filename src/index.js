import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import App from './App.jsx'
// import Card from './Cards';
// import Sdata from './Sdata'
// import ReactChallange from './ReactChallange'
// import Cardx from './Cardx'
import PokemonApi from './PokemonApi'


ReactDOM.render(
    <BrowserRouter>
         <App />

    </BrowserRouter>
   
    ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();