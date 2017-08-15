import React,{Component} from 'react';

class Inputs extends Component{
   constructor(){
      super();
      this.state = {
         val:'haha'
      };
   };
   /*changeVal = (ev)=>{
      this.setState({
         val:ev.target.value
      });
   };*/
   render(){
      return(
         <input
            onChange = {this.changeVal}
            type="text"
            //  defaultValue = '123'
            value={this.state.val}
         />
      );
   };
};

export default Inputs;
