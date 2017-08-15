import React,{Component} from 'react';

class CtoP extends Component{
   constructor(){
      super();
      this.state = {
         arr:[
            {text:'第一个',id:1,checked:false},
            {text:'第二个',id:2,checked:false},
            {text:'第三个',id:3,checked:false},
            {text:'第四个',id:4,checked:true}
         ]
      };
   }
   abc = (id) => {
      let {arr} = this.state;
      let list = Object.assign(arr);
      list.forEach((e,i) => {
         if (e.id === id) {
            e.checked = !e.checked;
         }
      });
      this.setState({
         arr:list
      });
   }
   render(){
      let {arr} = this.state;
      let arr1 = [];
      arr1 = arr.map((e,i) => {
         let data = {
            txt:e.text,
            key:i,
            id:e.id,
            check:e.checked,
            abc:this.abc
         };
         return <Li {...data}/>;
      })
      return(
         <ul>
            {arr1}
         </ul>
      );
   };
};

class Li extends Component{
   change = () => {
       this.props.abc(this.props.id)
   };
   render(){
      return(
         <li>
            <input
               type = "checkbox"
               checked = {this.props.check}
               onChange = {this.change}
            />
            <span>{this.props.txt}</span>
         </li>
      );
   };
};

export default CtoP;
