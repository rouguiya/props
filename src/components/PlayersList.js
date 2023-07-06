import React from 'react';
import Player from './Player';
import Players from './Players';

const PlayerList = () => {
  console.log(Player);
  return (
    <div style={{display:'flex' , justifyContent:'space-around' , alignItems:'center'}} >
      {
      Player.map((joueur) => (
        <div>
        <Players
         name= {joueur.name}
         age= {joueur.age}
         nationalite= {joueur.image}
         equipe= {joueur.equipe}
         image= {joueur.nationalite} 
         numero= {joueur.numero} 
         />
         </div>
      ))
      }
    </div>
  );
};



export default PlayerList ;