import React,{Component} from 'react';
import Li from './Li.js';
class Ul3 extends Component{
   constructor(){
      super();
      this.state = {
         list:['aaa','bbb','ccc']
      }
   };
   click = ()=>{
      let {list} = this.state;
      let arr = Object.assign(list);
      arr.push('hehe');
      this.setState({
         list:arr
      });
   };
   render(){
      let {list} = this.state;
      let arr2 = null;
      arr2 = list.map(function(e, i) {
         let data = {
            txt:e,
            num:i,
            key:i
         }
         return <Li {...data}/>;
      });
      return(
         <div>
            <button
               onClick = {this.click}
               >点击</button>
            <ul>
               {arr2}
            </ul>
         </div>
      );
   };
};
export default Ul3;
