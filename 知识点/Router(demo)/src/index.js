import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {
   BrowserRouter as Router,
   Route,
   Link,
   Redirect,
   withRouter
} from 'react-router-dom';
import App from './component/app.js';

ReactDOM.render(
   <Router>
      <Route path = "/" component = {App} />
   </Router>
   ,document.getElementById('root')
);

if(module.hot){
  module.hot.accept();
}
