import React from "react";

//For State Component//
export class Header extends React.Component{
 render() {
     return (
         <nav className="navbar navbar-default">
             <div className="container">
                 <div className="navbar-header">
                     <ul className="nav navbar-nav">
                          <li><a href="#">Header</a></li>
                         <li><a href="#">{this.props.homeLink}</a></li>

                     </ul>
                 </div>
             </div>
         </nav>
     );
 }
}

//for Stateless component//
// export const Header= (props)=>{
//      return (
//          <nav className="navbar navbar-default">
//              <div className="container">
//                  <div className="navbar-header">
//                      <ul className="nav navbar-nav">
//                          <li><a href="#">{props.homeLink}</a></li>
//                      </ul>
//                  </div>
//              </div>
//          </nav>
//      );
// }