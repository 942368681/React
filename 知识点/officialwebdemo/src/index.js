import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './style.css';

/*class Clock extends Component{
   constructor(){
      super();
      this.state = {
         date:new Date()
      };
   };
   componentDidMount (){
      this.timer = setInterval(
         () => this.tick(),1000
      );
   };
   componentWillUnMount (){
      clearInterval(this.timer);
   };
   tick = () => {
      this.setState({
         date:new Date()
      });
   };
   render(){
      return(
         <div>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
         </div>
      );
   };
};*/

/*class Toggle extends Component {
   constructor() {
      super();
      this.state = {
         isToggleOn: true
      };
   };
   handleClick = () => {
      this.setState((prevState, props) => {
         console.log(props);//表示当前的props，在这里为空
         return {isToggleOn: !prevState.isToggleOn}
      });
   };
   render() {
      return (
         <button onClick={this.handleClick}>
            {this.state.isToggleOn
               ? 'ON'
               : 'OFF'}
         </button>
      );
   };
};*/

/*function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}
const messages = ['React', 'Re: React', 'Re:Re: React'];*/

/*function WarningBanner(props) {
   if (!props.warn) {
      return null;
   }

   return (
      <div className="warning">
         Warning!
      </div>
   );
}
class Page extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         showWarning: true
      }
      this.handleToggleClick = this.handleToggleClick.bind(this);
   }
   handleToggleClick() {
      this.setState(prevState => ({
         showWarning: !prevState.showWarning
      }));
   }
   render() {
      return (
         <div>
            <WarningBanner warn={this.state.showWarning}/>
            <button onClick={this.handleToggleClick}>
               {this.state.showWarning
                  ? 'Hide'
                  : 'Show'}
            </button>
         </div>
      );
   }
}*/

/*class FlavorForm extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         value: 'coconut'
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event) {
      this.setState({value: event.target.value});
   }

   handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
   }

   render() {
      return (
         <form onSubmit={this.handleSubmit}>
            <label>
               Pick your favorite La Croix flavor:
               <select value={this.state.value} onChange={this.handleChange}>
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
               </select>
            </label>
            <input type="submit" value="Submit"/>
         </form>
      );
   }
}*/

/*class Reservation extends Component{
   constructor (){
      super();
      this.state = {
         isGoing:true,
         numberOfGuests:2
      };
   };
   handleInputChange = (ev) => {
      const target = ev.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      this.setState({
         [name]:value
      });
   };
   render (){
      return(
         <form>
            <label>
               Is going:
               <input
                  name = "isGoing"
                  type = "checkbox"
                  checked = {this.state.isGoing}
                  onChange = {this.handleInputChange}
               />
            </label>
            <br />
            <label>
               Number of guests:
               <input
                  name = "numberOfGuests"
                  type = "number"
                  value = {this.state.numberOfGuests}
                  onChange = {this.handleInputChange}
               />
            </label>
         </form>
      );
   };
};*/

/*function BoilingVerdict(props) {
   if (props.celsius >= 100) {
      return <p>The water would boil.</p>;
   }
   return <p>The water would not boil.</p>;
}
class Calculator extends Component {
   constructor() {
      super();
      this.state = {
         temperature: ''
      };
   };
   handleChange = (ev) => {
      this.setState({temperature: ev.target.value});
   };
   render() {
      const temperature = this.state.temperature;
      return (
         <fieldset>
            <legend>Enter temperature in Celsius:</legend>
            <input value={temperature} onChange={this.handleChange}/>
            <BoilingVerdict celsius={parseFloat(temperature)}/>
         </fieldset>
      );
   };
}*/

/*function FancyBorder(props){
   return (
      <div>
         {props.children}
      </div>
   );
};
class WelcomeDialog extends Component {
   render() {
      return (
         <FancyBorder color="blue">
            <h1 className="Dialog-title">
               Welcome
            </h1>
            <p className="Dialog-message">
               Thank you for visiting our spacecraft!
            </p>
         </FancyBorder>
      );
   };
}*/

/*function FancyBorder(props){
   return (
      <div>
         {props.children}
      </div>
   );
};
function Dialog(props) {
   return (
      <FancyBorder>
         <h1>
            {props.title}
         </h1>
         <p>
            {props.message}
         </p>
         {props.children}
      </FancyBorder>
   );
};
class SignUpDialog extends Component {
   constructor() {
      super();
      this.state = {
         login: ''
      };
   };
   handleChange = (ev) => {
      this.setState({
         login:ev.target.value
      });
   };
   handleSignUp = () => {
      alert(`Welcome aboard, ${this.state.login}!`);
   };
   render() {
      return (
         <Dialog
            title="Mars Exploration Program"
            message="How should we refer to you?"
         >
            <input value={this.state.login} onChange={this.handleChange}/>
            <button onClick={this.handleSignUp}>
               Sign Me Up!
            </button>
         </Dialog>
      );
   };
};*/

/*function Repeat(props){
   //这里props.children是下面Repeat标签包裹的函数
   let items = [];
   for (var i = 0; i < props.numTimes; i++) {
      items.push(props.children(i));
   }
   return <div className = "box">{items}</div>;
};
function ListOfTenThings(){
   return(
      <Repeat numTimes = {10}>
         {(index) => <div key = {index}>This is item {index} in the list</div>}
      </Repeat>
   );
};*/

/*class Greeting extends React.Component {
   render(){
      return(
         <h1>Hello,{this.props.name}</h1>
      );
   };
};
// 出于性能的原因，propTypes 仅在开发模式中检测
Greeting.propTypes = {
   name:PropTypes.string
};
// 指定props默认值
Greeting.defaultProps = {
   name:'bbb'
};*/

/*class CustomTextInput extends Component {
   constructor (){
      super();
      this.state = {};
   };
   blur = () => {
      this.textInput.blur();
   };
   componentDidMount = () => {
      this.textInput.focus();
   };
   render (){
      return (
         <div>
            <input
               type = "text"
               ref = {(elem) => {this.textInput = elem}}
            />
            <input
               type = "button"
               value = "Blur the text input"
               onClick = {this.blur}
            />
         </div>
      );
   };
};*/

/*class NameForm extends Component {
   constructor (){
      super();
      this.state = {};
   }
   handleSubmit = () => {
      alert('A name was submitted:'+this.input.value);
   };
   render (){
      return (
         <form onSubmit = {this.handleSubmit}>
            <label>
               Name:
               <input
                  type = "text"
                  ref = {(ele) => {this.input = ele}}
               />
            </label>
            <input
               type = "submit"
               value = "Submit"
            />
         </form>
      );
   };
};*/

/*
   优化性能：
      如果你的组件在部分场景下不需要更新，你可以在 shouldComponentUpdate 返回 false 来跳过整个渲染流程，包括调用render() 和之后流程。
      shouldComponentUpdate(nextProps, nextState) {
         return false;
      }
*/

/*class CounterButton extends Component {
   constructor() {
      super();
      this.state = {
         count: 1
      };
   };
   countAdd = () => {
      let num = this.state.count;
      this.setState({
         count: num + 1
      });
   };
   shouldComponentUpdate = (nextProps, nextState) => {
      if (this.props.color !== nextProps.color) {
         return true;
      }
      if (this.state.count !== nextState.count) {
         return true;
      }
      return false;
   };
   render() {
      return (
         <button color={this.props.color} onClick={this.countAdd}>Count : {this.state.count}</button>
      );
   };
};*/

/*关于componentWillReceiveProps ()*/
/*class Worker extends Component {
   constructor (){
      super();
      this.state = {num:2}
   };
   componentWillReceiveProps (){
      let num1 = this.state.num+1;
      this.setState({num:num1});
   };
   render (){
      return (
         <div>
            <span>{this.state.num}</span>
         </div>
      );
   };
};
class Boss extends Component {
   constructor (){
      super();
      this.state = {num:1};
   };
   numAdd = () => {
      let num1 = this.state.num+1;
      this.setState({
         num:num1
      });
   };
   render (){
      return (
         <div className = "box">
            <Worker />
            <button onClick = {this.numAdd}>click me!</button>
            <p>自身计数：{this.state.num}</p>
         </div>
      );
   };
};*/
/*class Pic extends Component {
   constructor (){
      super();
      this.state = {style:''};
   };
   click = () => {
      console.log(this.pic);
      this.setState({
         style:'aaa'
      });
   };
   render (){
      let arr = [];
      arr = <img
               src={require('./img/a.jpg')}
               ref= {(elem) => {this.pic = elem}}
               onLoad = {this.click}
               className = {this.state.style}
            />
      return(
         <div>
            {arr}
         </div>
      );
   };
};*/

class List extends Component {
   constructor (){
      super();
      this.state = {

      };
   };
   render (){
       var arr = [
           {
               "domain":"原子",
               "item":"aqaqwea"
           },
           {
               "domain":"其他",
               "item":"bewqadfbb"
           },
           {
               "domain":"原子",
               "item":"ccdasfc"
           },
           {
               "domain":"个性",
               "item":"asdfaffgff"
           },
           {
               "domain":"原子",
               "item":"dadsdd"
           },
           {
               "domain":"其他",
               "item":"eaedsafe"
           },
           {
               "domain":"个性",
               "item":"gsdfggf"
           },
           {
               "domain":"个性",
               "item":"hhasdgbdfh"
           }
       ];
       var obj = {};
       arr.forEach((e,i) => {
           if (!obj[e.domain]) {
               obj[e.domain] = [];
           }
           obj[e.domain].push(e.item);
       });
       let arr2 = [];
       for (var k in obj) {
           arr2.push(
               {
                   "type":k,
                   "items":obj[k]
               }
           )
       }
       console.log(arr2);
       let arr3 = arr2.map((e,i) => {
           let arr4 = e.items.map((elem,index) => {
               console.log(elem);
               return(
                   <li key = {index}>{elem}</li>
               );
           });
           return(
               <div key = {i}>
                   <h2>{e.type}</h2>
                   <ul>
                       {arr4}
                   </ul>
               </div>
           );
       });
      return(
         <div>
            {arr3}
         </div>
      );
   };
};

ReactDOM.render(
   <List />, document.getElementById('root'));
