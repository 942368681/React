import React,{Component} from 'react';

class HeadModule extends Component{
//解绑受限表单
   changeVal = (ev) => {
      this.props.valChange(ev.target.value)
   };
//回车添加项
   keyup = (ev) =>{
      if (ev.keyCode === 13) {
         if (ev.target.value === '') {
            alert('请输入内容');
         } else {
            let data = {
               text:ev.target.value,
               id:+new Date(),
               checked:false,
               disp:"block"
            };
            this.props.keyCodeChange(data)
         }
      }
   };

   render(){
      return(
         <header className="header" >
            <h1>todos</h1>
            <input
               className="new-todo"
               placeholder="请输入内容"
               value = {this.props.val}
               onChange = {this.changeVal}
               onKeyUp = {this.keyup}
            />
         </header>
      );
   };
};

export default HeadModule;
