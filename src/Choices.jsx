import triangle from "./assets/bg-triangle.svg";
import scissors from "./assets/icon-scissors.svg";
import paper from "./assets/icon-paper.svg";
import rock from "./assets/icon-rock.svg";
const Choices = () => {
  return (
    <div className="flex justify-center mt-28">
      <div className="relative w-3/4 ">
        <img src={triangle} className="w-full" />
        <div
          className="flex items-center justify-center md:w-[200px] md:h-[200px]
         w-[100px] h-[100px] rounded-full bg-white border-[12px] border-blue-500 absolute md:-left-8  -left-4 -top-3 cursor-pointer hover:border-[15px] transition-all  ease-in hover:shadow-[inset_0_200px_rgba(0,0,0,0.2)]"
        >
          <img src={paper} className="w-2/4" />
        </div>
        <div className="flex items-center justify-center md:w-[200px] md:h-[200px] w-[100px] h-[100px] rounded-full bg-white border-[12px] hover:border-[15px] border-yellow-500 ease-in absolute md:-right-8  -right-4 -top-3 cursor-pointer  transition-all hover:shadow-[inset_0_200px_rgba(0,0,0,0.2)]">
          <img src={scissors} className="w-2/4" />
        </div>
        <div className="flex items-center justify-center md:w-[200px] md:h-[200px] w-[100px] h-[100px] rounded-full bg-white border-[12px] hover:border-[15px] border-red-500 absolute bottom-0 left-2/4 -translate-x-2/4 cursor-pointer  transition-all hover:shadow-[inset_0_200px_rgba(0,0,0,0.2)] ease-in">
          <img src={rock} className="w-2/4" />
        </div>
      </div>
    </div>
  );
};
export default Choices;
