const Footer = () => {
  return (
    <div className="absolute bottom-[0rem] left-[0rem] w-[80rem] h-[19.167rem] text-left text-[2.778rem] text-white font-menu">
      <div className="absolute bottom-[0rem] left-[0rem] bg-black w-[80rem] h-[19.167rem]" />
      <div className="absolute bottom-[8rem] left-[8.889rem] w-[62.222rem] flex flex-row items-center justify-start gap-[36.333rem]">
        <b className="relative leading-[110%] uppercase">
          <p className="m-0">{`Ready for your `}</p>
          <p className="m-0">
            <span className="text-red">next</span>
            <span>{` lession? `}</span>
          </p>
        </b>
        <div className="flex flex-row items-start justify-start gap-[0.833rem]">
          <img
            className="w-[1.667rem] relative h-[1.656rem]"
            alt=""
            src="/group.svg"
          />
          <img
            className="w-[1.667rem] relative h-[1.667rem] overflow-hidden shrink-0"
            alt=""
            src="/iconinstagram.svg"
          />
          <img
            className="w-[1.667rem] relative h-[1.667rem]"
            alt=""
            src="/vector.svg"
          />
        </div>
      </div>
      <div className="absolute bottom-[3.167rem] left-[8.889rem] w-[62.222rem] h-[1.444rem] flex flex-row items-center justify-between text-[0.889rem] text-soft-grey font-body">
        <div className="flex flex-row items-start justify-start gap-[0.722rem]">
          <img
            className="w-[1.333rem] relative h-[1.333rem] overflow-hidden shrink-0"
            alt=""
            src="/frame.svg"
          />
          <div className="relative leading-[160%]">info@boxchampy.com</div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[3.056rem]">
          <div className="relative leading-[160%]">Privacy policy</div>
          <div className="relative leading-[160%]">{`Term & Conditions`}</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
