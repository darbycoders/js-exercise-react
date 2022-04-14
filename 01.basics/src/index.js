/* @jsx createElement */ // <- jsx 지시어
import { createElement, render, Component } from './react.js';

class Text extends Component {
  render() {
    return (
      <span>L({this.props.v})</span>
    );    
  }
} 

function Hello(props) {
  return <li className="item"><Text v={props.label} /></li>;
}

function App() {
  let x = 10;

  x = x ** x;
  
  return (
    <div>
      <h1>Hello World</h1>
      <ul className="board" onClick={() => null}>
        <Hello label="Hello World" />
        <Hello label={`hello ${x}`} />
        <Hello label="World 3" />
        <Hello label="React 4" />
      </ul>
    </div>
  );
}

render(<App />, document.getElementById("root"));
