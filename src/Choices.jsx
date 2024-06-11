import triangle from "./assets/bg-triangle.svg";
import scissors from "./assets/icon-scissors.svg";
import paper from "./assets/icon-paper.svg";
import rock from "./assets/icon-rock.svg";
const Choices = () => {
  return (
    <div className="flex justify-center mt-14 md:mt-8">
      <div className="relative w-[40vh] ">
        <img src={triangle} className="w-full" />
        <div className="paper paper--hover">
          <img src={paper} className="w-2/4" />
        </div>
        <div className="scissor scissor--hover">
          <img src={scissors} className="w-2/4" />
        </div>
        <div className="rock rock--hover">
          <img src={rock} className="w-2/4" />
        </div>
      </div>
    </div>
  );
};
export default Choices;
