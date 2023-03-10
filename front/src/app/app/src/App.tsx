import React from 'react';
import './App.css';
import SimpleGraph from './components/SimpleGraph';
// import SimpleGraph2 from './components/SimpleGraph2';
// import StyledGraph from './components/StyledGraph';
// import StyledGraph2 from './components/StyledGraph2';
// import StyledGraph3 from './components/StyledGraph3';
// import RandomGraph from './components/RandomGraph'

function App() {
  return (
    <div className="App" style={{width: "90%", height: "100%"}}>
      <SimpleGraph />
      {/* <SimpleGraph2 />
      <StyledGraph />
      <StyledGraph2 />
      <StyledGraph3 />
      <RandomGraph /> */}
    </div>
  );
}

export default App;
