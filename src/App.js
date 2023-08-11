import React from "react";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {seconds: 0}
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }))
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return(
        <div>Секунда : {this.state.seconds}</div>
    )
  }
}

export default App