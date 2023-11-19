import React from "react";
import BotCard from "./BotCard"
function YourBotArmy({ army, onReleaseClick, onDischargeClick }) {
  
  return (
    <div>
      <h1 style={{backgroundColor:"#e52165"}}>mybotarmy</h1>
    <div style={{
      display: 'grid', 
      gridTemplateColumns: 'repeat(3, 1fr)',
       gridAutoRows: 'minmax(200px, auto)', 
       gap: '10px', backgroundColor:" #f3ca20" }}>
      
      {army.map((bot) => (
        <div key={bot.id}>
          <button onClick={() => onReleaseClick(bot)}>Release</button>
          <button onClick={() => onDischargeClick(bot)}>X</button>
          <BotCard bot={bot}  isEnlisted={true}/>
        </div>
      ))}
    </div>
    </div>
     );
}

export default YourBotArmy;
