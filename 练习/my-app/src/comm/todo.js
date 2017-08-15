import React,{Component} from 'react';
import Li from './Li.js';
/*class Todo extends Component{
   constructor(){
      super();
      this.state = {
         val:'',
         arr:['这是第一条数据']
      };
   };
   keyup = (ev)=>{
      if (ev.keyCode === 13) {
         let {arr} = this.state;
         let arr2 = Object.assign(arr);
         arr2.push(ev.target.value);
         this.setState({
            arr:arr2,
            val:''
         });
      }
   };
   change = (ev)=>{
      this.setState({
         val:ev.target.value
      });
   };
   render(){
      let {arr} = this.state;
      let arr2 = [];
      arr2 = arr.map(function(e, i) {
         let data = {
            num:i,
            txt:e,
            key:i
         };
         return <Li {...data}/>;
      })
      return(
         <div>
            <input
               type="text"
               // defaultValue={this.state.val}
               value={this.state.val}
               onChange={this.change}
               onKeyUp = {this.keyup}
            />
            <ul>
               {arr2}
            </ul>
         </div>
      );
   };
};*/
class Todo extends Component{
   constructor(){
      super();
      this.state = {
         arr:['第一条数据'],
         val:''
      };
   };
   change = (ev)=>{
      this.setState({
         val:ev.target.value
      });
   };
   keyup = (ev)=>{
      if (ev.keyCode === 13) {
         let {arr} = this.state;
         let arr1 = Object.assign(arr);
         arr1.push(ev.target.value);
         this.setState({
            arr:arr1,
            val:''
         });
      }
   };
   render(){
      let {arr} = this.state;
      let arr1 = [];
      arr1 = arr.map(function(e, i) {
         let data = {
            num:i,
            key:i,
            txt:e
         };
         return <Li {...data}/>;
      })
      return(
         <div>
            <input
               type = "text"
               value = {this.state.val}
               onChange = {this.change}
               onKeyUp = {this.keyup}
            />
            <ul>
               {arr1}
            </ul>
         </div>
      );
   };
};
export default Todo;
