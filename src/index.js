import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App></App>
  </Router>,
  document.getElementById("root")
);

/*
export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Texto Inicial" };
  }

  //state= { name: "Texto Inicial" }; en vez de constructor

  onchange = (event) => {
    console.log(event.target.value);
    this.setState({ name: event.target.value });
  };

  render() {
    return <input onchange={this.onChange} value={this.props.username} />;
  }
}

ReactDOM.render(<Example username="jrom" />, document.getElementById("root"));
*/
/*
import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";

const virtualDOMExample = () => {
  document.getElementById("root").innerHTML = `
    <div>
    Hello HTML
    <input  />
    <pre>${new Date().toLocaleTimeString()}</pre>
    </div>
    `;
  ReactDOM.render(
    React.createElement(
      "div",
      null,
      "Hello HTML",
      React.createElement("input", null),
      React.createElement("pre", null, new Date().toLocaleTimeString())
    ),
    document.getElementById("root2")
  );
};

render(setInterval(virtualDOMExample, 1000), document.getElementById("root"));
*/
