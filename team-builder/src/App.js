import React, {useState} from 'react';
import TeamList from './components/TeamList'
import TeamForm from './components/TeamForm'
import './App.css';

function App() {
  const [players, setPlayers] = useState([])

  const addNewPlayer = player => {

    const newPlayer = {
      id: Date.now(),
      name: player.name,
      email: player.email,
      role: player.role
    }
    const newPlayerCollection = [...players, newPlayer]

    setPlayers(newPlayerCollection);
  }
  console.log(players)
  return (
    <div className="App">
      <header className="App-header">
       <h1>TeamBuilder</h1>
       <TeamForm addNewPlayer={addNewPlayer}/>
      <TeamList players = {players} />
      </header>
     
    </div>
  );
}

export default App;
