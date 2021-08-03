import React from 'react';
import './App.css';
// import Greet from './components/CC/Greet';
import ListRenderComp from './components/FC/ListRenderComp';
// import UserGreeting from './components/CC/UserGreeting';
// import ParentComps from './components/CC/ParentComps';
import CountreState from './components/CC/CountreState';
// import StateClass from './components/CC/StateClass';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';

function App() {
  return (
    <div className="App">
      {/* <ClickCounter /> */}
      {/* <HoverCounter /> */}

      {/* <ListRenderComp /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComps /> */}
      <CountreState />
      {/* <StateClass /> */}
      {/* <Greet name="Rok" age={24}> Nouman </Greet> */}
      {/* <Greet name="sumi" age={27}> <button> Action</button> </Greet> */}
    </div>
  );
} 

export default App;
