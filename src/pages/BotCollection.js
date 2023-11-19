import React, { useState, useEffect } from "react";
import  BotCard from "./BotCard";
function BotCollection() {
  const [bots, setBots] = useState([]);
  
  const [isLoading, setIsLoading] = useState(false);
  

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => {
        setBots(data); // Assuming the bot data is stored in the 'bots' key
        setIsLoading(true);
      });
  }, []);

  if (!isLoading) {
    return <h3>Loading...</h3>;
  }
 
  return (
    <>
     
      <div className="botCollection"  style={{
     display: 'grid', 
     gridTemplateColumns: 'repeat(3, 1fr)',
      gridAutoRows: 'minmax(200px, auto)', 
      gap: '10px' }}>
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot}  />
        ))}
      </div>
    </>
  )}
  export default BotCollection