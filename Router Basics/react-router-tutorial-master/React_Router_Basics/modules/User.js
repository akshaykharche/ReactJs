import React from 'react';
import {hashHistory} from "react-router"

export class User extends  React.Component{
      onNavigateHome(){
        hashHistory.push("/home")
      }
        render(){
             return(
                <div>
              <h3>The User Page</h3>
               <p>User ID:{this.props.params.id}</p>
               <button  onClick={this.onNavigateHome}  className="btn btn-primary">Go Home</button>
              </div>
            );
        }
}