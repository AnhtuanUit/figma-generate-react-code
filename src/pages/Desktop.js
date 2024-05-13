import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Footer from "../components/Footer";

const Desktop = () => {
  return (
    <div className="max-w-[1200px] w-full relative bg-soft-grey h-[108.889rem] overflow-hidden text-left text-[7.111rem] text-white font-menu">
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
      <div className="absolute top-[30.667rem] left-[calc(50%_-_337px)] bg-white shadow-[0px_19px_75px_rgba(164,_15,_15,_0.17)] w-[37.444rem] h-[8.444rem] flex flex-row items-end justify-center py-[1.111rem] px-[4.889rem] box-border gap-[4.944rem] text-[1.333rem] text-red">
        <div className="flex flex-col items-center justify-end gap-[0.944rem]">
          <img
            className="w-[2.611rem] relative h-[2.611rem] overflow-hidden shrink-0"
            alt=""
            src="/frame.svg"
          />
          <b className="relative leading-[110%] uppercase">Exercise</b>
        </div>
        <div className="flex flex-col items-center justify-end gap-[0.889rem]">
          <img
            className="w-[2.061rem] relative h-[2.611rem]"
            alt=""
            src="/vector.svg"
          />
          <b className="relative leading-[110%] uppercase">lession</b>
        </div>
        <div className="flex flex-col items-center justify-end gap-[1.111rem]">
          <img
            className="w-[2.611rem] relative h-[2.611rem] overflow-hidden shrink-0"
            alt=""
            src="/layer-1.svg"
          />
          <b className="relative leading-[110%] uppercase">crossfit</b>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
