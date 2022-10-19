import { useState } from 'react';
import AddGamers from './AddGamers';
import GameRoom from './GameRoom';

const Game = () => {
    const [playerName, setPlayerName] = useState("");
    const [players, setPlayers] = useState([]);

    const newPlayer = ({ target }) => {
        setPlayerName(target.value)
    }
    const submitForm = (e) => {
        e.preventDefault();
    }
    const handleAdd = () => {
        setPlayers(players => [...players, playerName]);
    }
    return (
        <div>
            <AddGamers newPlayer={newPlayer} submitHandler={submitForm} handleAdd={handleAdd} />
            <GameRoom players={players} />
        </div>
    );
}

export default Game;