import { useState } from "react";
import Rules from "./Rules";

const Footer = () => {
  const [isRulesOpen, setIsRulesOpen] = useState(false);
  const onClose = () => {
    setIsRulesOpen(false);
  };
  return (
    <div className="flex justify-center mt-12 md:mt-2  md:justify-end">
      <button
        className="py-[0.2em] uppercase font-normal hover:border-white hover:bg-white hover:text-gray-400 transition-all ease-in text-2xl tracking-[0.2em] text-white border-4 border-gray-400 rounded-lg px-[2em]"
        onClick={() => setIsRulesOpen(true)}
      >
        Rules
      </button>
      {isRulesOpen && <Rules onClose={onClose} />}
    </div>
  );
};
export default Footer;
