import React,{Component} from 'react';

class MainModule extends Component{

   constructor(){
      super();
      this.state = {
         db:false
      };
   }

   click = (ev) => {
       this.props.closeLi(this.props.id)
   };

   change = () => {
      this.props.checkChange(this.props.id)
   };

   dbClick = () => {
      this.setState({
         db:true
      },() => {
         this.db.focus();
         this.db.value = this.props.txt;
      });
   };

   blur = () => {
      let {checked,id} = this.props;
      let data = {
         checked:checked,
         id:id,
         text:this.db.value,
         disp:"block"
      };
      this.props.changeText(data);
      this.setState({
         db:false
      });
   };

   keyup = (ev) => {
      let prevVal = this.props.txt;
      if (ev.keyCode === 13) {
         //回车
         this.blur();
      } else if (ev.keyCode === 27) {
         //esc
         this.db.value = prevVal;
         this.setState({
            db:false
         });
      }
   };

   render(){
      let style = this.props.checked?"completed":"";
      if (this.state.db) {
         style+=' editing'
      }
      return(
         <li className={style} style={this.props.disp}>
            <div className="view">
               <input
                  className="toggle"
                  type="checkbox"
                  checked = {this.props.checked}
                  onChange = {this.change}
               />
               <label
                  onDoubleClick = {this.dbClick}
               >{this.props.txt}</label>
               <button
                  className="destroy"
                  onClick = {this.click}
               ></button>
            </div>
            <input
               className ="edit"
               ref = {(elem) => {this.db = elem}}
               onKeyUp = {this.keyup}
               onBlur = {this.blur}
            />
         </li>
      );
   };
};

export default MainModule;
