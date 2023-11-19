import './App.css';
import BotCollection from './pages/BotCollection';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
// import YourBotArmy from './pages/YourBotArmy'
import HomePage from './pages/HomePage'
function App() {
  return (
    <>
    <Navbar/>
    <HomePage/>
    <Routes>
    <Route path='/botcollection' element={<BotCollection/>}></Route>
      
      </Routes>
    </>
  );
}

export default App;
