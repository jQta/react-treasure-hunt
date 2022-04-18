import { useState } from 'react';
import './App.css';
import BoardGame from './components/boardGame/BoardGame';

const row = prompt("How many squares do you want on the board?");

const rowBoard = [];

for (let i = 0; i < row; i++) {
  rowBoard.push(i);
}

let winnerPoint = Math.floor(Math.random() * row);

function App() {
  const [ count, setCount ] = useState(0);

  return (
    <section className="board-container">
      <h1>Hunt the treasure</h1>
      <div className="board-box">
        {rowBoard.map((card, i) =>
          <div key={i}>
            <BoardGame card={card} winnerPoint={winnerPoint} count={count} setCount={setCount} />
          </div>
        )}
      </div>
      <div className="score-box">
        <h3>Tries: <span>{count}</span></h3>
      </div>
      <button onClick={() => window.location.reload()}>Restart Game</button>
    </section>
  );
}

export default App;
