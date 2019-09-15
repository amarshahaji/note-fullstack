import React, {Component} from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Chat from "./Chat";
import History from "./History";

export default class About extends Component{
    render(){
        return(
      <Router>
          
        <div>
            <nav>
          <ul>
          <li>
            <Link to="/">chat</Link>
          </li>
          <li>
            <Link to="/history">History</Link>
          </li>
          </ul>
          </nav>
         <Switch>
          <Route path="/chat" component={Chat}/>
          <Route path="/history" component={History}/>
          </Switch>
          </div>
      </Router>
        )
    }
}