import React from 'react';
import './App.css';
import PortfolioApp from './components/portfolio1/PortfolioApp';

// import App1 from './components/project1/App1';

// import Greet from './components/CC/Greet';
// import InlineCss from './components/FC/InlineCss';
// import RefsDemo from './components/Refs/RefsDemo';
// import ParentComp from './components/PureComp/ParentComp';
// import FormHandle from './components/CC/FormHandle';
// import Stylesheet from './components/FC/Stylesheet';
// import ListRenderComp from './components/FC/ListRenderComp';
// import UserGreeting from './components/CC/UserGreeting';
// import GreetParent from './components/CC/GreetParent';
// import CountreState from './components/CC/CountreState';
// import StateClass from './components/CC/StateClass';
// import ClickCounter from './components/HOC/ClickCounter';
// import HoverCounter from './components/HOC/HoverCounter';
// import ClickCounterTwo from './components/RenderProps/ClickCounterTwo';
// import HoverCounterTwo from './components/RenderProps/HoverCounterTwo';
// import User from './components/RenderProps/User';
// import Counter from './components/RenderProps/Counter';
// import Color from './components/ErrorHandling/AllColor';
// import Post from './components/httpAxios/Post';
// import ParentComp from './components/ContextApi/ParentComp';


function App() {
  return (

    <div className="App">

        <PortfolioApp />
        {/* <App1 /> */}
        {/* <ParentComp /> */}  {/* Contexapi */}
        {/* <Post />  {/* axios */}
        {/* <Color /> */}   {/* ErrorBoundary */}

      {/* <Counter>
          { (count, Increment) => (
              <ClickCounterTwo count={count} Increment={Increment} /> 
          )}
        </Counter> 
        
        <Counter>
      { (count, Increment) => (
              <HoverCounterTwo count={count} Increment={Increment} /> 
          )}
      </Counter>  */}


      {/* <ClickCounterTwo /> 
      <HoverCounterTwo />  
      <User name={ (isLoggedIn) => isLoggedIn ? "Iftakher" : "Guest" } />  RenderProps */}

      {/* <ClickCounter name='Iftakher' age={37} /> 
      <HoverCounter /> */}

      {/* <RefsDemo  /> */}
      {/* <ParentComp  /> */}
      {/* <FormHandle  /> */}
      {/* <InlineCss  /> */}
      {/* <Stylesheet primary = {false}  /> */}
      {/* <ListRenderComp /> */}
      {/* <UserGreeting /> */}
      {/* <GreetParent /> */}
      {/* <CountreState /> */}
      {/* <StateClass /> */}
      {/* <Greet name="Rok" age={24}> Nouman </Greet> */}
      {/* <Greet name="sumi" age={27}> <button> Action</button> </Greet> */}
    </div>
  );
} 

export default App;
