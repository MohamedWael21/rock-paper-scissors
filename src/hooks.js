import { useEffect } from 'react';
import { useState } from 'react'
import {GAME_FINISHED, MOVES, whoWin} from './utils';
import {useAppContext} from './AppContext'

export const useGetComputerMove = ()=>{
    const [computerMove, setComputerMove] = useState("");
    const [isFinish, setIsFinish] = useState(false);

    const {playerMove, dispatch} = useAppContext();

    const getRandomMove = () => {
        return MOVES[Math.floor(Math.random()*MOVES.length)];
    }
    
    useEffect(() => {
        const timer = setTimeout(() => {
            const computerMove = getRandomMove();
            
            const changeValue = whoWin(playerMove, computerMove);
            const report = changeValue == 1 ? "You win" : changeValue === -1 ? "You Lose" : "draw" 

            dispatch({type:GAME_FINISHED, payload:{report, changeValue}});
            setIsFinish(true);
            setComputerMove(computerMove);

        }, 1000);

        return () => {
            clearTimeout(timer);
        }
    }, [dispatch, playerMove]);


    return {computerMove, isFinish};
}