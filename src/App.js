import react from 'react'
import './App.css';
import Game from 'Game.js'
import Main from 'Main.js'
import Player from 'Player.js'
import Test from 'Test.js'


function App() {
  return (
    <div className="App">
     <Main />
     <Game />
     <Test />
     <Player />
    </div>
  );
}

export default App;
