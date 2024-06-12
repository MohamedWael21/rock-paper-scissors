import clsx from "clsx";
import { useAppContext } from "./AppContext";
import triangle from "./assets/bg-triangle.svg";
import Move from "./Move";
import {
  PAPER,
  PLAYER_PLAYED,
  ROCK,
  SCISSOR,
  getMoveBorderColor,
  getTheMoveImage,
} from "./utils";
const Choices = () => {
  const { dispatch } = useAppContext();
  const play = (move) => {
    dispatch({ type: PLAYER_PLAYED, payload: move });
  };
  return (
    <div className="flex justify-center mt-14 md:mt-8">
      <div className="relative w-[40vh] ">
        <img src={triangle} className="w-full" />
        <Move
          Containerclasses={clsx(
            "absolute md:-left-8 -left-4 -top-3 cursor-pointer",
            getMoveBorderColor(PAPER)
          )}
          imgClasses="w-2/4"
          moveImg={getTheMoveImage(PAPER)}
          clickAble
          onClick={() => play(PAPER)}
        />
        <Move
          Containerclasses={clsx(
            "absolute md:-right-8 -right-4 -top-3 cursor-pointer",
            getMoveBorderColor(SCISSOR)
          )}
          imgClasses="w-2/4"
          moveImg={getTheMoveImage(SCISSOR)}
          clickAble
          onClick={() => play(SCISSOR)}
        />
        <Move
          Containerclasses={clsx(
            "absolute bottom-0 left-2/4 -translate-x-2/4 cursor-pointer",
            getMoveBorderColor(ROCK)
          )}
          imgClasses="w-2/4"
          moveImg={getTheMoveImage(ROCK)}
          clickAble
          onClick={() => play(ROCK)}
        />
      </div>
    </div>
  );
};
export default Choices;
