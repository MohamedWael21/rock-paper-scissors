import clsx from "clsx";
const Move = ({
  clickAble,
  onClick,
  Containerclasses = "",
  imgClasses = "",
  moveImg,
}) => {
  const classes = clsx(
    "flex items-center justify-center w-[15vh] h-[15vh] rounded-full bg-white border-[2vh] transition-all ease-in shadow-[inset_0_5px_rgba(0,0,0,0.3)]",
    Containerclasses,
    {
      "hover:shadow-[inset_0_200px_rgba(0,0,0,0.2)] hover:border-[2.5vh]":
        clickAble,
    }
  );

  return (
    <div className={`${classes}`} {...(clickAble ? { onClick } : {})}>
      <img src={moveImg} className={`${imgClasses}`} />
    </div>
  );
};

export default Move;
