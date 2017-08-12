import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import HeadModule from './component/header.js';
import MainModule from './component/main.js';
import FooterModule from './component/footer.js';

class App extends Component{
   constructor(){
      super();
      this.state = {
         value:'',
         arr:[/*{text:'多多对对对',id:0,checked:false,disp:"block"}*/],
         num:0,
         onOff:true,
         footer:"none"
      };
   };
//修改输入框内容
   valChange = (val) => {
      this.setState({
         onOff:false,
         value:val
      });
   };
//回车添加项
   keyCodeChange = (data) => {
      let {arr} = this.state;
      let arr1 = Object.assign(arr);
      arr1.push(data);
      this.setState({
         onOff:true,
         value:'',
         arr:arr1
      });
      this.click1();
   }
//点击关闭删除当前项
   closeLi = (id) => {
      let {arr} = this.state;
      let arr1 = Object.assign(arr);
      let arr2 = arr1.filter((e) => {
         return e.id !== id
      });
      this.setState({
         value:'',
         arr:arr2
      });
   };
//单选
   checkChange = (id) => {
      let {arr} = this.state;
      let arr1 = Object.assign(arr);
      arr1.forEach((e) => {
         if (e.id === id) {
            e.checked = !e.checked
         }
      });
      this.setState({
         arr:arr1
      });
   };
//全选
   allChange = (ev) => {
      let {checked} = ev.target;
      let {arr} = this.state;
      let arr1 = Object.assign(arr);
      arr1.forEach((e) => {
         e.checked = checked
      });
      this.setState({
         arr:arr1
      });
   };
//失焦改变当前项内容
   changeText = (data) => {
      let {arr} = this.state;
      let arr1 = Object.assign(arr);
      arr1.forEach((e,i) => {
         if (e.id === data.id) {
            arr1.splice(i,1,data)
         }
      });
      this.setState({
         arr:arr1
      });
   };
//全部
   click1 = () => {
      let ul = document.getElementsByClassName('filters')[0];
      let as = ul.getElementsByTagName('a');
      for (var i = 0; i < as.length; i++) {
         as[i].className = '';
      }
      as[0].className = 'selected';
      let {arr} = this.state;
      let arr1 = Object.assign(arr);
      arr1.forEach((e,i) => {
         e.disp = "block";
      });
      this.setState({
         arr:arr1
      });
   };
//未完成
   click2 = () => {
      let {arr} = this.state;
      let arr1 = Object.assign(arr);
      arr1.forEach((e,i) => {
         if (e.checked === true) {
            e.disp = "none";
         } else {
            e.disp = "block";
         }
      });
      this.setState({
         arr:arr1
      });
   };
//已完成
   click3 = () => {
      let {arr} = this.state;
      let arr1 = Object.assign(arr);
      arr1.forEach((e,i) => {
         if (e.checked === false) {
            e.disp = "none";
         } else {
            e.disp = "block";
         }
      });
      this.setState({
         arr:arr1
      });
   };
//清除完成项目
   click4 = () => {
      let {arr} = this.state;
      let arr1 = Object.assign(arr);
      let arr2 = arr1.filter((e,i) => {
         return e.checked === false;
      });
      this.setState({
         arr:arr2
      });
   };

   render(){
      let data1 = {
         val:this.state.value,
         valChange:this.valChange,
         keyCodeChange:this.keyCodeChange
      };
      let {arr} = this.state;
      let arr1 = Object.assign(arr);
      let list = arr1.map((e,i) => {
         let data = {
            key:i,
            id:e.id,
            txt:e.text,
            checked:e.checked,
            closeLi:this.closeLi,
            checkChange:this.checkChange,
            changeText:this.changeText,
            disp:{display:e.disp}
         };
         return <MainModule {...data}/>
      });
      var all = null;
      if (arr1.length) {
         all = arr1.every((e) => {
            return e.checked;
         });
         this.state.footer = "block";
      } else {
         all = false;
         this.state.footer = "none";
      }
      //计数
      if (this.state.onOff) {
         this.state.num = arr1.length;
         arr1.forEach((e) => {
            if (e.checked === true) {
               this.state.num--;
            }
         });
      }
      let data2 = {
         n:this.state.num,
         footer:{display:this.state.footer},
         click1:this.click1,
         click2:this.click2,
         click3:this.click3,
         click4:this.click4
      }

      return(
         <div>
            <HeadModule {...data1}/>
            <section className="main">
               <input
                  className="toggle-all"
                  type="checkbox"
                  checked = {all}
                  onChange = {this.allChange}
               />
               <ul className="todo-list">
                  {list}
               </ul>
            </section>
            <FooterModule {...data2}/>
         </div>
      );
   };
};

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
