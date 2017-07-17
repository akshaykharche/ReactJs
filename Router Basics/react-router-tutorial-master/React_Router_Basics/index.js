import React from 'react';
import { render } from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from "react-router"

import {User} from './modules/User';
import {Home} from './modules/Home';
import {Root} from './modules/Root';
import {About} from './modules/About';

class App extends  React.Component{
        render(){
            return(
                <Router history={hashHistory}>
                  <Route path={"/"} component={Root}> 
                  <IndexRoute component={Home}/>
                   <Route path={"user/:id"} component={User}> </Route>
                     <Route path={"home"} component={Home}> </Route>
                      <Route path={"about"} component={About}> </Route>                     
                  </Route>
                  <Route path={"home"} component={Home}/>  
              </Router>
            ); 
        
        }
}

render(<App/>,window.document.getElementById("app"));
