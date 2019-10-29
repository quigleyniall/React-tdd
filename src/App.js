import React from 'react';

class App extends React.Component {
  state = { foo: 'bar' }

  // async componentDidMount() {
  //   const { initial } = this.state;
  //   console.log(initial)
  //   await this.setState(prevState => ({ initial: '2 '}))
  //   console.log(initial)
  //   await this.setState(prevState => ({ initial: '3 '}))
  //   console.log(initial)
  // }

  render() {
    return <div className="hello">Hello World</div>;
  }
}

export default App;
