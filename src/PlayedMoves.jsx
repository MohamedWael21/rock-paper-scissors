import clsx from "clsx";
import { useAppContext } from "./AppContext";
import Move from "./Move";
import { getMoveBorderColor, getTheMoveImage } from "./utils";
import { useGetComputerMove } from "./hooks";
const PlayedMoves = () => {
  const { playerMove } = useAppContext();
  const { computerMove, isFinish } = useGetComputerMove();
  return (
    <div className="flex  gap-14 sm:gap-40 justify-center">
      <div>
        <Move
          Containerclasses={clsx(
            "sm:w-[20vh] sm:h-[20vh] bubble",
            getMoveBorderColor(playerMove)
          )}
          imgClasses="w-4/5"
          moveImg={getTheMoveImage(playerMove)}
        />
        <p className="uppercase text-white text-center mt-4 sm:text-2xl">
          You Picked
        </p>
      </div>

      <div className="flex flex-col items-center">
        {isFinish ? (
          <Move
            Containerclasses={clsx(
              "sm:w-[20vh] sm:h-[20vh]",
              getMoveBorderColor(computerMove)
            )}
            imgClasses="w-1/2"
            moveImg={getTheMoveImage(computerMove)}
          />
        ) : (
          <div className=" w-[15vh] h-[15vh] sm:w-[20vh] sm:h-[20vh] rounded-full bg-[#1a2946] opacity-70"></div>
        )}

        <p className="uppercase text-white text-center mt-4 sm:text-2xl">
          the house Picked
        </p>
      </div>
    </div>
  );
};

export default PlayedMoves;
