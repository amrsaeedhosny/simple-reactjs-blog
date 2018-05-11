import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from "./components/home/home"
import Article from "./components/article/article"
import Navbar from "./components/navbar/navbar"

class App extends React.Component
{
    render(){
        return(
          <div>
            <Navbar/>
            <Router>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/article" component={Article}/>
              </Switch>
            </Router>
          </div>
        );
    }
}

render(<App/> , window.document.getElementById("app"));
