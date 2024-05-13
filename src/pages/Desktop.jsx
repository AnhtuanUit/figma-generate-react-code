import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Footer from "../components/Footer";
import RunIcon from "../components/RunIcon";
import BoxingIcon from "../components/BoxingIcon";
import StrongIcon from "../components/StrongIcon";

const Desktop = () => {
  return (
    <div className="mx-auto  max-w-[1200px] w-full relative bg-soft-grey h-[108.889rem] overflow-hidden text-left text-[7.111rem] text-white font-menu">
      <img
        className="absolute top-[0rem] left-[0rem] w-[80rem] h-[37.778rem] object-cover"
        alt=""
        src="/rectangle-1@2x.png"
      />
      <b className="absolute top-[14.167rem] left-[8.889rem] leading-[90%]">
        <p className="m-0">{`FIGHT LIKE `}</p>
        <p className="m-0">
          <span>{`A `}</span>
          <span className="text-red">CHAMPION</span>
        </p>
      </b>
      <Navbar />
      <Section />
      <Footer />
      <div className="absolute top-[34.5rem] left-[calc(50%_-_337px)] shadow-[0px_19px_75px_rgba(164,_15,_15,_0.17)] bg-white w-[42.125rem] h-[9.5rem] flex flex-row items-end justify-center py-[1.25rem] px-[5.5rem] box-border gap-[5.562rem] text-[1.5rem] text-red">
        <div className="flex flex-col items-center justify-end gap-[1.062rem]">
          <RunIcon />
          <b className="relative leading-[110%] uppercase">Exercise</b>
        </div>
        <div className="flex flex-col items-center justify-end gap-[1rem]">
          <BoxingIcon />
          <b className="relative leading-[110%] uppercase">lession</b>
        </div>
        <div className="flex flex-col items-center justify-end gap-[1.25rem]">
          <StrongIcon />
          <b className="relative leading-[110%] uppercase">crossfit</b>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
