import React,{Component} from 'react';
class Ul2 extends Component {
  constructor(){
    super();
    this.state={
      arr:[]
    };
    this.click = this.click.bind(this);
  };
  click(){
    let arr2 = ['aaa','bbb','ccc'];
    this.setState({
      arr:arr2
    });
  };
  render(){
    let {arr} = this.state;
    let list = null;
    list = arr.map(function(e, i) {
      let data = {
        key:i
      }
      return <li {...data}>{e}</li>;
    })
    return(
      <div>
        <button
          onClick = {this.click}
          >点击</button>
          <ul>{list}</ul>
        </div>
      );
  };
};
export default Ul2;
