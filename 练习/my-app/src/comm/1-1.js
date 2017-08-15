import React,{Component} from 'react';
class D1_1 extends Component{
   render(){
      let child = null;
      let defaultChildern = [
         <span>H</span>,
         <span>W</span>
      ];
      if (this.props.children) {
         child = React.Children.map(this.props.children,(child)=>{
            return child;
         });
      } else {
         child = React.Children.map(defaultChildern,(child)=>{
            return child;
         });
      }
      return(
         <li>
            <span>{this.props.txt}</span>
            {child}
         </li>
      );
   };
};
export default D1_1;
