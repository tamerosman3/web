// import React from 'react';
// import './App.css';

// // A simple functional component
// function Greeting(props) {
//   return <h1>Hello, {props.name}!</h1>;
// }

// // A class component
// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };

//     // Binding this to event handler
//     this.incrementCount = this.incrementCount.bind(this);
//   }

//   incrementCount() {
//     this.setState({ count: this.state.count + 1 });
//   }

//   render() {
//     return (
//       <div>
//         <p>You clicked {this.state.count} times</p>
//         <button onClick={this.incrementCount}>Click me</button>
//       </div>
//     );
//   }
// }

// // Main App component
// function App() {
//   return (
//     <div className="App">
//       <Greeting name="React Beginner" />
//       <Counter />
//     </div>
//   );
// }

// export default App;

import Message from './Message';
import ListGroup from './components/ListGroup';

function App() {

  return <div><ListGroup></ListGroup></div>

}

export default App;