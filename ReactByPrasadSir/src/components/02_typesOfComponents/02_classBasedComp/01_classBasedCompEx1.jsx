import { Component } from "react";

class ClassBasedCompEx1 extends Component {
  // let count = 0        // we can't use var/let/const for declaring the variables in class

  // we can declare state outside the constructor 
  // state = {
  //     count: 0;
  // };

  constructor() {
    // we can declare state inside the constructor(recommended)
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div id='cbcEx1-centerme'>
        <h1>ClassBasedComponentEx1</h1>
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
            console.log(this.state);
          }}
        >
          increment
        </button>
      </div>
    );
  }
}
export default ClassBasedCompEx1;
