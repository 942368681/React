import React, {Component} from 'react';
import ReactDOM from 'react-dom';

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

class Reservation extends Component{
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
};

ReactDOM.render(
   <Reservation />, document.getElementById('root'));
