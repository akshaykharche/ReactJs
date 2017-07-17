import React from "react";
export class Home extends React.Component{ 
 constructor(props){
           super();
           this.state={
               homeLink:props.intialHomeName
           }
 }

onHandleChange(event){
    this.setState({
            homeLink:event.target.value
    })

     // Very IMP, If we want to check for two way binding, uncomment below line.     
     //this.props.binding(this.state.homeLink)
    
}
onLinkChange(){
    this.props.binding(this.state.homeLink)
}

 render(){
     return(
         <div>
            <input type="text"  value={this.state.homeLink}
            onChange={(event)=>this.onHandleChange(event)}
            />           
              <hr/>
             <button   className={"btn btn-primary"} onClick={this.onLinkChange.bind(this)}>Change Header</button>
          </div>
     );
 }

}