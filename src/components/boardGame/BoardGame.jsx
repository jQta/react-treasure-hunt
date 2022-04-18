import React, { useState } from 'react'
import X from '../../assets/x.png';
import Chest from '../../assets/chest.png';
import Skull from '../../assets/skull.png';

let endgame = false;

export default function BoardGame({ card, winnerPoint, count, setCount }) {
    const [ board, setBoard ] = useState(X);
    const [ clicked, setClicked ] = useState(false);

    function checkTreasure(card, winnerPoint) {
        if (!endgame) {
            if (clicked === false) {
                setCount(count + 1)

                if (card === winnerPoint) {
                    setBoard(Chest)
                    setTimeout(() => {
                        alert("You found the treasure in: " + (count + 1) + " tries");
                        setClicked(true)
                    }, 150);
                    endgame = true;
                } else {
                    setBoard(Skull)
                    setClicked(true);
                }
            }
        }
    }

    return (
        <img src={board} alt="BoardGame" onClick={() => checkTreasure(card, winnerPoint)} />
    )
}
