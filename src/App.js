import { Component } from "inferno";
import Logo from "./logo";
import "./App.css";
import Counter from "./components/Counter";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick() {
    this.setState({ counter: this.state.counter + 1 })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo width="80" height="80" />
          <p>{`Welcome to Inferno`}</p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Counter value={this.state.counter} />
          <button onClick={this.handleButtonClick}>+</button>
        </header>
      </div>
    );
  }
}

export default App;
