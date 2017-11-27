// http://www.jianshu.com/p/6a45e2dfc9d9
// 基本使用
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {
   BrowserRouter as Router,
   Route,
   Link,
   Switch
} from 'react-router-dom';

class Home extends Component {
   constructor (){
      super();
      this.state = {};
   };
   render (){
      return(
         <h2>Home</h2>
      );
   };
};

class About extends Component {
   constructor (){
      super();
      this.state = {};
   };
   render (){
      return(
         <h2>About</h2>
      );
   };
};

class Topics extends Component {
   constructor (){
      super();
      this.state = {};
   };
   render (){
      let topicsArr = this.props.topics;
      let items = [];
      topicsArr.map((e,i) => {
         return items.push(<li key = {i}>{e}</li>);
      });
      console.log(items);
      return(
         <div>
            <h2>Topics</h2>
            <ul>
               {items}
            </ul>
         </div>
      );
   };
};

class NoMatch extends Component {
   constructor (){
      super();
      this.state = {};
   };
   render (){
      return(
         <h2>没有匹配页</h2>
      );
   };
};

class Basic extends Component {
   constructor (){
      super();
      this.state = {
         topics:['A','B','C']
      };
   };
   render(){
      return (
         <Router>
            <div>
               <ul>
                  <li><Link to = "/">首页</Link></li>
                  <li><Link to = {{
                     pathname:"/about",
                     search:"?sort=name",
                     hash:"#the_hash"
                  }}>关于</Link></li>
                  <li><Link to = "/topics">主题列表</Link></li>
               </ul>

               <hr/>
               <Switch>
                  <Route exact path = "/" component={Home} />
                  <Route path = "/about" component={About} />
                  <Route
                     path = "/topics"
                     render = {() => {
                        return <Topics
                           topics = {this.state.topics}
                        />
                     }}
                  />
                  <Route component = {NoMatch} />
               </Switch>
            </div>
         </Router>
      );
   };
};

ReactDOM.render(<Basic />,document.getElementById('root'));
