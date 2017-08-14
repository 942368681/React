import React,{Component} from 'react';

class FooterModule extends Component{
//全部
   click1 = () => {
      this.props.click1();
   };
//未完成
   click2 = () => {
      let ul = document.getElementsByClassName('filters')[0];
      let as = ul.getElementsByTagName('a');
      for (var i = 0; i < as.length; i++) {
         as[i].className = '';
      }
      this.a2.className = 'selected';
      this.props.click2();
   };
//已完成
   click3 = () => {
      let ul = document.getElementsByClassName('filters')[0];
      let as = ul.getElementsByTagName('a');
      for (var i = 0; i < as.length; i++) {
         as[i].className = '';
      }
      this.a3.className = 'selected';
      this.props.click3();
   };
//清除完成项
   click4 = () => {
      this.props.click4();
   };

   render (){
      return(
         <footer className="footer" style = {this.props.footer}>
            <span className="todo-count">
               <strong>{this.props.n}</strong>
               <span>条未选中</span>
            </span>
            <ul className="filters">
               <li>
                  <a
                     href="#/all"
                     className="selected"
                     onClick = {this.click1}
                     ref = {(elem) => {this.a1 = elem}}
                  >全部</a>
               </li>
               <li>
                  <a
                     href="#/active"
                     onClick = {this.click2}
                     ref = {(elem) => {this.a2 = elem}}
                  >未完成</a>
               </li>
               <li>
                  <a
                     href="#/completed"
                     onClick = {this.click3}
                     ref = {(elem) => {this.a3 = elem}}
                  >已完成</a>
               </li>
            </ul>
            <button
               className="clear-completed"
               onClick = {this.click4}
            >清除完成项</button>
         </footer>
      );
   };
};

export default FooterModule;
