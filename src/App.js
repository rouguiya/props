import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayersList from "./components/PlayersList";


function App() {
  return (
    <div style={{
      marginTop:'30px' ,
      marginBottom:'30px' ,
      marginRight:'150px' ,
      margin:'50px' ,
      padding:'50px' ,
      }} className="App">
      <h1 style={{fontWeight:'900' ,
      display:'flex' ,
       justifyContent:'center' ,
        alignItems:'center' , 
      }}
          >PLAYERS</h1>
      <PlayersList />
    </div>
  ); 
}

export default App;



