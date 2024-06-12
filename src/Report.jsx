import { useAppContext } from "./AppContext";
import { RESET_GAME } from "./utils";

const Report = () => {
  const { gameReport, dispatch } = useAppContext();
  return (
    <div className="mt-6">
      <p className="text-white uppercase text-center font-bold mb-9 text-6xl ">
        {gameReport}
      </p>
      <button
        className="uppercase mx-auto block text-[hsl(229_25%_31%)] bg-white rounded-lg px-[5em] py-[0.8em] hover:bg-gray-200 transition-all ease-in"
        onClick={() => dispatch({ type: RESET_GAME })}
      >
        play again
      </button>
    </div>
  );
};

export default Report;
