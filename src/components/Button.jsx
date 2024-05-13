const Button = ({ cONTACT }) => {
  return (
    <div className="bg-red h-[2.5rem] flex flex-row items-center justify-center py-[0.556rem] px-[1.667rem] box-border text-left text-[0.889rem] text-white font-menu">
      <b className="relative leading-[110%] uppercase">{cONTACT}</b>
    </div>
  );
};

export default Button;
