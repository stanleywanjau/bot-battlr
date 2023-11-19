import React, { useState, useEffect } from "react";
import  BotCard from "./BotCard";
import YourBotArmy from "./YourBotArmy"
function BotCollection() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => {
        setBots(data); // Assuming the bot data is stored in the 'bots' key
        setIsLoading(true);
      });
  }, [army]);

  if (!isLoading) {
    return <h3>Loading...</h3>;
  }
  const isBotEnlisted = (bot) => {
    const enlisted = army.some((armyBot) => armyBot.id === bot.id);
    console.log(`${bot.name} is enlisted: ${enlisted}`);
    return enlisted;
  };
  function handleEnlistClick(bot) {
    // Check if the bot is already in the army
    if (!army.some((armyBot) => armyBot.id === bot.id)) {
      setArmy([...army, bot]);
    }
  }

  function handleReleaseClick(bot) {
    // Remove the bot from the army
    setArmy(army.filter((armyBot) => armyBot.id !== bot.id));
  }

  function handleDischargeClick(bot) {
    // Create a copy of the current army excluding the discharged bot
    const updatedArmy = army.filter((armyBot) => armyBot.id !== bot.id);

    // Update the state immediately using a callback function
    setArmy((prevArmy) => {
      // Ensure that the state is not overwritten by other updates
      if (JSON.stringify(prevArmy) === JSON.stringify(army)) {
        return updatedArmy;
      }
      return prevArmy;
    });

    // Send a request to delete the bot from the backend
    fetch(`http://localhost:3000/bots/${bot.id}`, { method: "DELETE" })
      .then((res) => {
        if (res.ok) {
          console.log("Bot discharged from service forever.");
        } else {
          console.error("Failed to discharge bot from service.");
          // If the delete request fails, revert the state change
          setArmy([...army, bot]);
          
        }
      });
  }



 
  return (
    <>
     <div>
     <YourBotArmy army={army} onReleaseClick={handleReleaseClick} onDischargeClick={handleDischargeClick} />
     </div>
      <div className="botCollection"  style={{
     display: 'grid', 
     gridTemplateColumns: 'repeat(3, 1fr)',
      gridAutoRows: 'minmax(200px, auto)', 
      gap: '10px' }}>
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot}  onEnlistClick={() => handleEnlistClick(bot)} isEnlisted={isBotEnlisted(bot)}  />
        ))}
      </div>
    </>
  )}
  export default BotCollection