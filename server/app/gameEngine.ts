import {Board, StrategoBoard} from "../../game-engine/src/board/board";
import {Case, CaseState, create as createCase} from "../../game-engine/src/case";
import { Color, PieceType, create as createPiece } from "../../game-engine/src/piece/piece";
import * as Engine from "../../game-engine/src/engine_utils";

var inquirer = require('inquirer');

// 1) le 1er joueur qui se connecte est rouge
// 2) -> Les pions sont deja places Case[][] initialise
// 3) tour par tour


console.log('Start : Stratego Game');

const initGame = [
    {
        type: 'input',
        name: 'firstPlayerName',
        message: 'Name first player ?',
        default: 'Player1',
    },
    {
        type: 'input',
        name: 'secondPlayerName',
        message: 'Name second player ?',
        default: 'Player2',
    },

];

const move = [
    {
        type: 'input',
        name: 'x',
        message: 'Move X :'
    },
    {
        type: 'input',
        name: 'y',
        message: 'Move Y :'
    },
];


const launchGame = (firstPlayerName, secondPlayerName, currentFirstPlayer: boolean, board: Board) => {

    if (Engine.gameIsOver(board)) {
        console.log()
        return;
    }

    currentFirstPlayer
        ? console.log(firstPlayerName + " : ")
        : console.log(secondPlayerName + " : ")

    inquirer.prompt(move)
        .then(({x, y}) => {

            console.log(board.display());
            launchGame(firstPlayerName, secondPlayerName, !currentFirstPlayer, board)
        });
}

inquirer.prompt(initGame).then(({firstPlayerName, secondPlayerName}) => {
    let currentFirstPlayer = true
    let board = StrategoBoard.createEmptyStrategoBoard();
    let state = board.state();

    state[0][0] = createCase(CaseState.Full, 0, 0, createPiece(PieceType.General, Color.None));
    state[1][0] = createCase(CaseState.Full, 1, 0, createPiece(PieceType.Flag, Color.None));

    //modify
    let res = StrategoBoard.createStategoBoard(state);
    console.log(res)
    if (res.ok) {
        launchGame(firstPlayerName, secondPlayerName, currentFirstPlayer, res.val)
    }
});


