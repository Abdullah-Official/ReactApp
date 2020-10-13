import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './index.css'
import * as serviceWorker from './serviceWorker';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Navbar from './Navbar'
import {Switch,Route, Redirect} from 'react-router-dom'
import Footer from './Footer'

const App = () =>{
     return(
    <>
          <Navbar />
          <Switch>
         
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/contact' component={Contact} />
          <Redirect to="/"/>

          </Switch>
          <Footer/>
     </>
    
     )
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
export default App;