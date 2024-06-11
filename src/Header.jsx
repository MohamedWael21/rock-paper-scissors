import logo from "./assets/logo.svg";
const Header = () => {
  return (
    <div className="flex items-center justify-between px-5 py-6 text-white border-4 border-gray-400 rounded-lg">
      <div className="w-[40%] md:w-[35%]">
        <img src={logo} alt="logo" className="w-full" />
      </div>
      <div className="px-4 py-3 md:py-5 w-[38%] md:w-[28%] bg-white rounded-lg">
        <span className="text-[hsl(229,64%,46%)] text-lg md:text-4xl text-center block tracking-widest uppercase">
          Score
        </span>
        <p className="text-[hsl(217,_16%,_45%)] font-bold text-center text-5xl  md:text-8xl">
          12
        </p>
      </div>
    </div>
  );
};
export default Header;
