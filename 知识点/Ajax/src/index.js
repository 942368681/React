import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends Component{
   constructor(){
      super();
      this.state = {
         data:[]
      };
   };
   componentDidMount(){
      $.ajax({
         url:'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=?',
         data:{
           wd:'miaov'
         },
         dataType:'jsonp',
         success:(data) => {
           this.setState({
             data
           });
         }
      });
   };
   render(){
      let {data} = this.state;
      let arr = null;
      if (data.s) {
         arr = Object.assign(data.s);
         arr = arr.map((e,i) => <p key={i}>{e}</p>);
      }
      return(
         <div>
            {arr}
         </div>
      );
   };
}

ReactDOM.render(<App />, document.getElementById('root'));
