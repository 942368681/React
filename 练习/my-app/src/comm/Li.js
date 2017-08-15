import React,{Component} from 'react';
import '../css/Li.css';
class Li extends Component{
   render(){
      return(
         <li>
            <span>{this.props.num}</span>
            <p>{this.props.txt}</p>
         </li>
      );
   };
};
export default Li;
