import {  NavLink } from "react-router-dom";
function Navbar(){
  return(
    <div>
       

<NavLink to="/botcollection">BotCollection</NavLink> |
<NavLink to="/mybotarmy">MyBotArmy</NavLink> 
    </div>
  )
}
export default Navbar