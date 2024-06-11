import rulesImg from "./assets/image-rules.svg";
import closeImg from "./assets/icon-close.svg";
const Rules = ({ onClose }) => {
  return (
    <div className="bg-white absolute top-0 left-0 right-0 bottom-0 flex justify-between flex-col px-3 py-20">
      <p className="hsl(229,_25%,_31%) text-4xl uppercase text-center">Rules</p>
      <div className="flex justify-center">
        <img src={rulesImg} alt="rules" />
      </div>
      <div className="flex justify-center">
        <img
          src={closeImg}
          alt="close"
          onClick={() => onClose()}
          className="cursor-pointer "
        />
      </div>
    </div>
  );
};

export default Rules;
