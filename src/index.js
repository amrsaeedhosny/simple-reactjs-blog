import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Navbar from "./components/navbar/navbar"
import Home from "./pages/home"
import Articles from "./pages/articles"
import Article from "./pages/article"
import Tutorials from "./pages/tutorials"
import Tutorial from "./pages/tutorial"

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component
{
    render(){
        return(
          <div>
            <Navbar/>
            <Router>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/articles" component={Articles}/>
                <Route exact path="/articles/:id" component={Article}/>
                <Route exact path="/tutorials" component={Tutorials}/>
                <Route exact path="/tutorials/:id" component={Tutorial}/>
              </Switch>
            </Router>
          </div>
        );
    }
}

render(<App/> , window.document.getElementById("app"));
