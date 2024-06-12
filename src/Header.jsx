import { useAppContext } from "./AppContext";
import logo from "./assets/logo.svg";
const Header = () => {
  const { score } = useAppContext();
  return (
    <div className="flex items-center justify-between px-5 py-3 md:py-4  text-white border-4 border-gray-500 rounded-lg ">
      <div className="w-[30%] md:w-[18%]">
        <img src={logo} alt="logo" className="w-full" />
      </div>
      <div className="px-4 py-3  w-[38%] md:w-[15%]  bg-white rounded-lg">
        <span className="text-[hsl(229,64%,46%)] text-sm  text-center block tracking-widest uppercase">
          Score
        </span>
        <p className="text-[hsl(217,_16%,_45%)] font-bold text-center text-5xl md:text-6xl">
          {score}
        </p>
      </div>
    </div>
  );
};
export default Header;
