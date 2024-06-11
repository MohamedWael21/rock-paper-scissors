import paper from "./assets/icon-paper.svg";
const Waiting = () => {
  return (
    <div className="flex gap-20 justify-center">
      <div>
        <div className="paper static sm:w-[30vh] sm:h-[30vh] cursor-default">
          <img src={paper} alt="" className="w-1/2" />
        </div>
        <p className="uppercase text-white text-center mt-4 sm:text-2xl">
          You Picked
        </p>
      </div>

      <div className="flex flex-col items-center">
        <div className=" w-[15vh] h-[15vh] sm:w-[30vh] sm:h-[30vh] rounded-full bg-[#1a2946] opacity-70"></div>
        <p className="uppercase text-white text-center mt-4 sm:text-2xl">
          the house Picked
        </p>
      </div>
    </div>
  );
};

export default Waiting;
