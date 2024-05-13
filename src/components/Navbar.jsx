import Button from "./Button";

const Navbar = () => {
  return (
    <div className="absolute top-[2.556rem] left-[8.889rem] w-[62.222rem] flex flex-row items-center justify-between py-[0rem] px-[0.056rem] box-border text-left text-[1.833rem] text-white font-menu">
      <div className="flex flex-row items-center justify-start gap-[1.444rem]">
        <img
          className="w-[2.778rem] relative h-[2.922rem] overflow-hidden shrink-0"
          alt=""
          src="/logo-icon-1.svg"
        />
        <b className="relative leading-[90%] uppercase">Boxchampy</b>
      </div>
      <div className="flex flex-row items-center justify-center gap-[1.667rem] text-[0.889rem]">
        <div className="flex flex-row items-start justify-start gap-[2.611rem]">
          <b className="relative leading-[110%] uppercase">HOME</b>
          <b className="relative leading-[110%] uppercase">ABOUT</b>
          <b className="relative leading-[110%] uppercase">LOCATION</b>
          <b className="relative leading-[110%] uppercase">CONTACT</b>
        </div>
        <Button cONTACT="SIGN UP" />
      </div>
    </div>
  );
};

export default Navbar;
