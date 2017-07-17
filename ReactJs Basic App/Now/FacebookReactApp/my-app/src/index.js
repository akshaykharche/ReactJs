import React from "react";
import {render} from "react-dom";

import {Header} from "./Components/Header";
import {Home} from "./Components/Home";
class App extends React.Component{
    constructor(props){
            super();
            this.state={
                homeLink:"Akshay Kharche"
            }
    }
   onChangeName(newName){
        this.setState({
            homeLink:newName
        })
   }
render() {
   
    return (
        <div className="container">
            
            <div className="row">
                <Header homeLink={this.state.homeLink}/>
            </div>
            <div className="row">
                <Home 
                  intialHomeName={this.state.homeLink}
                  binding={this.onChangeName.bind(this)}
                />             
              
            </div>
            <hr/>

        </div>
    );
}
}
render(<App/>,window.document.getElementById("root"));
