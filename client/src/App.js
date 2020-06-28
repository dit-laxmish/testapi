import React from 'react';
import logo from './logo.svg';
import './App.css';
constructor(props)
{
  super(props);
  this.state = { apiResponse: '' };
}
function App() {
  

callAPI()
{
    fetch('http://localhost:3001/api')
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

componentWillMount()
{
    this.callAPI();
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-intro">;{this.state.apiResponse}</p>
      </header>
    </div>
  );
}

export default App;
