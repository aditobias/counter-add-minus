import React from 'react';
import './App.css';
import CounterGroup2nd from './components/CounterGroup/CounterGroup2nd';


class App extends React.Component{
  
  render(){
  
  return (
    <div className="App-header">
        {/* <Header /> */}
        <CounterGroup2nd defaultCounts={3}/>     
    </div>
  );
  }
}





export default App;
