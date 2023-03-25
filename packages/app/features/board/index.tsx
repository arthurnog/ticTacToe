import React, { useEffect } from 'react';
import { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './style';

type SquareValue = string | null;

interface SquarePropsType {
    value: SquareValue | undefined;
    onClick: () => void;
}

const Square: React.FC<SquarePropsType> = ({ value, onClick }) => {
    return (
        <TouchableOpacity
            style={styles.square}
            onPress={onClick}
        >
            <Text style={styles.text}>{value}</Text>
        </TouchableOpacity>
    );
}

enum Player {
    X,
    O,
}

interface GameStateType {
    board: SquareValue[];
    turn: Player;
    winner: Player | null;
}

export default function Board() {

    const [gameState, setGameState] = useState<GameStateType>({
        board: Array(9).fill(null),
        turn: Player.X,
        winner: null,
    });

    function handleClick(index: number) {

        setGameState((previousState) => {
            if (previousState.winner != null) {
                return previousState;
            }

            if (previousState.board[index] != null) {
                return previousState;
            }

            const newBoardState = [...previousState.board];
            newBoardState[index] = previousState.turn == Player.X ? "X" : "O";
            const nextTurnState = previousState.turn != Player.X ? Player.X : Player.O;

            return {
                board: newBoardState,
                turn: nextTurnState,
                winner: calculateWinner(newBoardState),
            }
        });

    }

    let [messenge, setMessenge] = useState("X Turn");

    useEffect(() => {
        if (gameState.winner != null) {
            setMessenge("The winner is: " + (gameState.winner == Player.X ? "X" : "O"));
        } else {
            setMessenge((gameState.turn == Player.X ? "X" : "O") + " Turn");
        }
    }, [gameState]);


    return (
        <View>
            <Text style={styles.messenge}>{messenge}</Text>
            <View style={styles.boardRow}>
                <Square value={gameState.board[0]} onClick={() => handleClick(0)} />
                <Square value={gameState.board[1]} onClick={() => handleClick(1)} />
                <Square value={gameState.board[2]} onClick={() => handleClick(2)} />
            </View>
            <View style={styles.boardRow}>
                <Square value={gameState.board[3]} onClick={() => handleClick(3)} />
                <Square value={gameState.board[4]} onClick={() => handleClick(4)} />
                <Square value={gameState.board[5]} onClick={() => handleClick(5)} />
            </View>
            <View style={styles.boardRow}>
                <Square value={gameState.board[6]} onClick={() => handleClick(6)} />
                <Square value={gameState.board[7]} onClick={() => handleClick(7)} />
                <Square value={gameState.board[8]} onClick={() => handleClick(8)} />
            </View>
        </View>
    );
}


const calculateWinner = (board: SquareValue[]): Player | null => {
    let lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    let winner: Player | null = null;
    lines.forEach((line) => {
        const boardLineValues = line.map((index) => board ? board[index] : undefined);
        const first = boardLineValues[0];
        if (!first) {
            return;
        }

        const areAllEqual = boardLineValues.every(value => value === first);
        if (areAllEqual) {
            winner = first == 'X' ? Player.X : Player.O;
        }
    })
    return winner;
}