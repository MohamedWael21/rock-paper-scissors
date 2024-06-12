import paper from "./assets/icon-paper.svg";
import scissor from "./assets/icon-scissors.svg";
import rock from "./assets/icon-rock.svg";

export const PAPER = "paper";
export const SCISSOR = "scissor";
export const ROCK = "rock";


export const MOVES = [PAPER, SCISSOR, ROCK];


export const PLAYER_PLAYED = "app/playerPlayed"
export const GAME_FINISHED = "app/gameFinish"
export const RESET_GAME = "app/resetGame"

const moveImages = {
    [PAPER]:paper,
    [SCISSOR]:scissor,
    [ROCK]: rock
}

const moveBordersColors = {
    [PAPER]: "border-blue-500",
    [SCISSOR]: "border-yellow-500",
    [ROCK]: "border-red-500"
}

export function getTheMoveImage(move){
    return moveImages[move]
}

export function getMoveBorderColor(move){
    return moveBordersColors[move]
}


/**
 *  return 
 *  1 if move1 beat move2
 *  0 in case of draw
 *  -1 if move2 beate move1
 */


export function whoWin(move1, move2){
    if(move1 === move2) return 0
    
    const isMove1Win = (move1 === PAPER && move2 === ROCK) || (move1 === ROCK && move2 === SCISSOR) || (move1 === SCISSOR && move2 === PAPER)

    return isMove1Win ? 1 : -1;
}