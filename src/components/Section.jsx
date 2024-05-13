import Button from "./Button";

const Section = () => {
  return (
    <div className="absolute top-[47.778rem] left-[8.889rem] flex flex-row items-center justify-center gap-[6.389rem] text-left text-[2.778rem] text-black font-menu">
      <img
        className="w-[30.556rem] relative h-[31.667rem] object-cover"
        alt=""
        src="/rectangle-3@2x.png"
      />
      <div className="flex flex-col items-start justify-start gap-[1.722rem]">
        <div className="w-[25.278rem] flex flex-row items-center justify-start gap-[1.611rem]">
          <div className="w-[0.389rem] relative bg-red h-[4.444rem]" />
          <b className="w-[22.5rem] relative leading-[110%] uppercase inline-block shrink-0">
            <p className="m-0">{`HOW WE GOT STARTED `}</p>
            <p className="m-0">IN THIS business</p>
          </b>
        </div>
        <div className="w-[25.278rem] relative text-[0.889rem] leading-[160%] font-body text-grey inline-block">
          <p className="m-0">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `}</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0 whitespace-pre-wrap">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            versions of Lorem Ipsum.
          </p>
        </div>
        <Button cONTACT="TAKE A free lession" />
      </div>
    </div>
  );
};

export default Section;
