import { useContext, useReducer } from "react";
import { createContext } from "react";
import { GAME_FINISHED, PLAYER_PLAYED, RESET_GAME } from "./utils";

const appContext = createContext();

export const useAppContext = () => {
  return useContext(appContext);
};

const initState = {
  score: Number(localStorage.getItem("score")),
  isPlayerPlayed: false,
  isGameFinish: false,
  gameReport: "",
  playerMove: "",
};

function reducer(state, action) {
  switch (action.type) {
    case PLAYER_PLAYED:
      return { ...state, playerMove: action.payload, isPlayerPlayed: true };
    case GAME_FINISHED: {
      const newScore = state.score + action.payload.changeValue;
      localStorage.setItem("score", newScore);
      return {
        ...state,
        isGameFinish: true,
        gameReport: action.payload.report,
        score: newScore,
      };
    }
    case RESET_GAME:
      return { ...initState, score: state.score };
    default:
      return state;
  }
}

export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <appContext.Provider value={{ ...state, dispatch }}>
      {children}
    </appContext.Provider>
  );
};
