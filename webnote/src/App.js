import React, {Component} from 'react';
import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom';

import Home from './Home.js';
import About from './About.js';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      notes:null
    }
  }

  render(){
    return(
        <Router>
          <div>
            <nav>
          <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          </ul>
          </nav>
          <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/About/' component={About}/>
          </Switch>
          </div>
          </Router>
    )
  }
}
export default App;