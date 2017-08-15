import React,{Component} from 'react';
import D1_1 from './1-1.js';
class D1 extends Component{
   constructor(){
      super();
      this.state = {
         arr:[1,2,3,4]
      };
   };
   render(){
      let {arr} = this.state;
      let arr1 = Object.assign(arr);
      let arr2 = arr1.map((e,i) => {
         let data = {
            txt:e,
            key:i
         }
         return <D1_1 {...data}>
                  <span>Hello!</span>
                  <span>World!</span>
                </D1_1>
      });
      return(
         <ul>
            {arr2}
         </ul>
      );
   };
};
export default D1;
