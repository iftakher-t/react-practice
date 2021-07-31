import React from 'react';
import './App.css';
import Greet from './components/CC/Greet';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';

function App() {
  return (
    <div className="App">
      {/* <ClickCounter /> */}
      {/* <HoverCounter /> */}

      {/* <MyClassComp /> */}
    <Greet name="Rok" age={24}> Nouman </Greet>
    </div>
  );
} 

export default App;
