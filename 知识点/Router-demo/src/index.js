import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {
   BrowserRouter as Router,
   Route,
   Link
} from 'react-router-dom';

class App1 extends Component{
   render(){
      return(
         <p>我是App1</p>
      );
   };
};
class App2 extends Component{
   render(){
      return(
         <p>我是App2</p>
      );
   };
};
class App3 extends Component{
   render(){
      return(
         <div>
            <p>我是App3</p>
            <Link to = "/app3/app3_1">App3_1</Link>
         </div>
      );
   };
};
class App3_1 extends Component{
   render(){
      return(
         <p>我是App3下的App3_1</p>
      );
   };
}

let arr = [
   {
      name:'app1',
      component:<App1 />
   },
   {
      name:'app2',
      component:<App2 />
   },
   {
      name:'app3',
      component:<App3 />
   }
];
/*
   component里面即可以写组件，也可以接收一个函数
   在这个函数中需要return一个组件。
   这个函数的参数中，有个obj
   obj里面有：
   history
   match:{
     url:'/app',
     path:'/:id',
     isExact: true,
     params:{
      id:xx
     }
   }
   location:{
     pathname:当前的地址是什么
   }

   match.params.id  就是路由的地址（/后面的地址）
   这个id是 path="/:id"的id
   /:id就是  / + 路由地址，通过match.params.id可以很方便的找到当前的路由是谁
*/
let child = (obj) => {
   console.log(obj);
   let {match} = obj;
   console.log(match);
   let f = null;
   f = arr.find((e) => {
      if (e.name === match.params.id) {
         return e;
      }
   });
   console.log(f);
   if (!f) {
      return <App1 />
   } else {
      return f.component;
   }
};

ReactDOM.render(
   (<Router>
      <div>
         <button>
            <Link to = "/app1">App1</Link>
         </button>
         <button>
            <Link to = "/app2">App2</Link>
         </button>
         <button>
            <Link to = "/app3">App3</Link>
         </button>
         <Route path = "/:id" component = {child} />
         <Route path = "/app3/app3_1" component = {App3_1} />
      </div>
   </Router>)
,document.getElementById('root'));

if(module.hot){
  module.hot.accept();
}
