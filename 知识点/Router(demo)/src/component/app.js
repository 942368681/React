import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {
   BrowserRouter as Router,
   Route,
   Link,
   Redirect,
   withRouter
} from 'react-router-dom';

class Public extends Component{
   render(){
      return(
         <div>
            <p>这是公共的页面</p>
         </div>
      );
   };
};

class Protected extends Component{
   render(){
      return(
         <div>
            <p>这是VIP页面</p>
         </div>
      );
   };
};

class Login extends Component{
   constructor(){
      super();
      this.state = {
         b:false
      };
   };
   click = () => {
      // let {changeBl} = this.props;
      let {b} = this.state;
      setTimeout(() => {
         this.props.changeBl();
         this.setState({
            b:true
         });
      },500);
   };
   render(){
      if (this.state.b) {
         return (<Redirect to = "/protected" />)
      }
      return(
         <div>
            <button onClick={this.click}>
               请登录
            </button>
            <p>登陆后可浏览VIP页面</p>
         </div>
      );
   };
};

class App extends Component{
   constructor(){
      super();
      this.state = {
         bool:false
      };
   };
   logOut = () => {
      this.setState({
         bool:false
      });
   };
   changeBl = () => {
      this.setState({
        bool:true
      });
   };
   render(){
      let {bool} = this.state;
      let h = null;
      if (bool) {
         h = <h1>欢迎来到VIP权限页面
               <button onClick = {this.logOut}>
                  <Link to = "/">退出</Link>
               </button>
             </h1>
      } else {
         h = <h1>您还没有登录！</h1>
      }
      return(
         <div>
            {h}
            <button>
               <Link to = "/public">公共的</Link>
            </button><br />
            <button>
               <Link to = "/protected">受限的</Link>
            </button>
            <Route path = "/public" component = {Public} />
            <Route path = "/protected" render = {() => {
               if (this.state.bool) {
                  return <Protected />
               } else {
                  return <Redirect to="/login" />
               }
            }} />
            <Route path = "/login" render = {() => {
               return <Login changeBl={this.changeBl}/>
            }} />
         </div>
      );
   };
};

export default App;
