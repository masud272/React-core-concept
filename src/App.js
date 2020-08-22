import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var Person = {name :" Dr. Mahfuz",
                job : " Singer"
          }
  var Person2 = {name :" Mrs. Eva Rahman",
                job : " Kokil Konti"
        }
        var style = {
          color: 'red',
          backgroundColor : 'yellow',
          borderTopLeftRadius : '10px',
          borderBottomRightRadius : '10px'
        }
          
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done <code>src/App.js</code> and save to reload.
        </p> 
        <h2 className="" style={style}>My Heading {Person.name + " " + Person.job}</h2>
        <h2 style={{backgroundColor:'cyan'}}>Singer : {Person2.name + " " + Person2.job}</h2>
        <p>This is my first Paragraph</p>
        <Crickter></Crickter>
        <Crickter></Crickter>
        <Crickter></Crickter>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
function Crickter() {
  // const cricketStyle ={
  //   border : '4px solid yellow',
  //   color : 'green'
  // }
  return (
  <div style={{color:'Cyan', border:'2px solid green', margin:'10px', textShadow:'5px 5px 4px grey', float:'left'}}>
    <h2>Name : Sakib Al Hasan</h2>
    <h3>No 1 Hero in BD</h3>
  </div>
  )
     
}

export default App;
