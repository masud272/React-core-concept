import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var Person = {name :" Dr. Mahfuz",
                job : " Singer"  }
  var Person2 = {name :" Mrs. Eva Rahman",
                job : " Kokil Konti"    }
        var style = {
          color: 'red',
          backgroundColor : 'yellow',
          borderTopLeftRadius : '10px',
          borderBottomRightRadius : '10px'
        }

    const nayoks = ['Anower', 'Jafor Iqbal', 'Alomgir', 'Faruk'];
    const product = [{ name :' Laptop', price:'1700 Dhs'},
                      {name :' Mobile', price:'520 Dhs'},
                      {name : 'Watch', price : '220 Dhs'}]


     const players = [{name : 'Mushfik', position:'Keeping' },
                      {name :'Tamim' , position:'batsman'},
                        {name : 'Marsrafee', position:'Booler'},
                      {name:'Rubel'}]  


         const playerNames =players.map(player => player.name);
         console.log(playerNames);                           
          
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done <code>src/App.js</code> and save to reload.
        </p> 

        <Counter></Counter>
        
        <h2 className="" style={style}>My Heading {Person.name + " " + Person.job}</h2>
        <h2 style={{backgroundColor:'cyan'}}>Singer : {Person2.name + " " + Person2.job}</h2>
        <p>Job : {Person2.job}</p>

        <p>This is my first Paragraph</p>
        <Crickter></Crickter>
        <Crickter></Crickter>
        <Crickter></Crickter>

        {
          product.map(prod => <Product product = {prod}></Product>)
        }
        <Product product ={product[0]}></Product>
        <Product product ={product[1]}></Product>
        <Product product ={product[2]}></Product>
        {/* <Product name={product[1].name} price={product[1].price}></Product>
        <Product name={product[2].name} price={product[2].price}></Product> */}
        
        

        <Nayok name={nayoks[3]} nayika=' Moushumi'></Nayok>
        <Nayok name='Jashim' nayika = ' Bobita'></Nayok>
        <Nayok name='Salman Sha' nayika = ' Shabnoor'></Nayok>

        {/*  Create multiple components  */}
        <Player></Player>
        <Player></Player>
        <Player></Player>


        <ul>
          {players.map(player => <li>{player.name}</li>)}
        </ul>
        
        <Users></Users>


        

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
    // Givving Style 
    // <div style={cricketStyle}>

  <div style={{color:'Cyan', border:'2px solid green', margin:'10px', textShadow:'5px 5px 4px grey', float:'right'}}>
    <h2>Name : Sakib Al Hasan</h2>
    <h3>No 1 Hero in BD</h3>
  </div>
  )
     
}


function Product(props) { 
  const producetStyle = {
    border : '1px grey solid',
    backgroundColor:'cyan',
    color:'black',
    width: '400px',
    height : '330px',
    margin : '15px',
    borderRadius : '15px',
    
    
  }
  var {name, price} = props.product;
  // console.log(name, price);
  return (
    <div style={producetStyle}>
      <h2>Name :{props.product.name}</h2>
      <h4>Price :{props.product.price} </h4>
      <h2> 2nd way {name}</h2>
     <h4>2nd way {price}</h4>
      <button>Buy Now</button>
    </div>
  )
  
}


function Nayok(props) {
  const  nayokStyle = {
    backgroundColor :'red',
    width :'400px',
    height : '300px',
    margin : '5px',
    borderRadius :'15px',
    float :'left',
    display :'inline-block'
  }
  // console.log(props);
  return (
    <div style={nayokStyle}>
      <h2>Name : {props.name} </h2>
    <h4> Hero of  :{props.nayika}</h4>
    <p style={{fontSize:'15px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed temporibus fugiat quaerat eaque, velit odit.</p>
    </div>
  )
  
}


// Create multiple components
function Player(props) {
  const  playerStyle = {
    color :'#ffffff',
    width : '300px',
    height : '200px',
    backgroundColor:'grey',
    borderRadius: '10px',
    overflow :'hidden',
    cursor: 'pointer',
    margin : '10px'
  }
  return ( 
    <div style ={playerStyle}>
      <h3>Name : </h3>
      <h4>Position :</h4>
      <p style = {{fontSize:'15px'}}>Small Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, hic.</p>
    </div>
  )
  
}

function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrese = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onMouseMove = {() => setCount(count-1)}>Decrease</button>
      <button onClick = {handleIncrese}>Increse</button>
    </div>
  )
  
}


function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  
  return(
    <div>
      <h3>Dynamic User : {users.length}</h3>
      <ol>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ol>
      {/* {
        users.map(user => {user.<img src='https://via.placeholder.com/600/24f355' alt=""/>}
      } */}
    </div>
  )
  
}





























export default App;
