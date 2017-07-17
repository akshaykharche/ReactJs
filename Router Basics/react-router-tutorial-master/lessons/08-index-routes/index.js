import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'

class MainAppCompoment extends  React.Component{
        render(){
            return(
            <Router history={hashHistory}>
                  <Route path="/" component={App}> 
                  <Route path="/repos" component={Repos}>   
                  <Route path="/repos/:userName/:repoName" component={Repo}/> </Route>
                  <Route path="/about" component={About}/> </Route>               
              </Router>
            );
        }
}

render(<MainAppCompoment/>,window.document.getElementById("app"));

// render((
//   <Router history={hashHistory}>
//     <Route path="/" component={App}>
//       <Route path="/repos" component={Repos}>
//         <Route path="/repos/:userName/:repoName" component={Repo}/>
//       </Route>
//       <Route path="/about" component={About}/>
//     </Route>
//   </Router>
// ), document.getElementById('app'))
