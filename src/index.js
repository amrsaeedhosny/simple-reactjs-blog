import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Navbar from "./components/navbar/navbar"
import Home from "./pages/home/home"
import AllArticles from "./pages/all-articles/all-articles"
import ArticleContent from "./pages/article-content/article-content"
import AllTutorials from "./pages/all-tutorials/all-tutorials"
import TutorialContent from "./pages/tutorial-content/tutorial-content"

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
                <Route exact path="/articles" component={AllArticles}/>
                <Route exact path="/articles/:id" component={ArticleContent}/>
                <Route exact path="/tutorials" component={AllTutorials}/>
                <Route exact path="/tutorials/:id" component={TutorialContent}/>
              </Switch>
            </Router>
          </div>
        );
    }
}

render(<App/> , window.document.getElementById("app"));
