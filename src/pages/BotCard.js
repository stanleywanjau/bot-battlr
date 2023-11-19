// BotCard.js
import React from "react";

function BotCard({ bot, onEnlistClick ,isEnlisted}) {
  
  return (
    <div className="botCard" >
      <img src={bot.avatar_url} alt="bots" style={{ backgroundColor: "#A9A9A9" }} />
      <div>Name: {bot.name}</div>
      <div>{bot.catchphrase}</div>
      <div className="dataContainer">
        <div className="dataItem">❤️: {bot.health}</div>
        <div className="dataItem">🛡️: {bot.armor}</div>
        <div className="dataItem">⚡: {bot.damage}</div>
      </div>
      {/* if enlisted is true it will not display the button and if false it will display */}
      {isEnlisted ? null: (
        <button onClick={() => onEnlistClick(bot)}>Enlist</button>
      )}
    </div>
  );
}

export default BotCard;
