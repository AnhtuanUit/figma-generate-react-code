import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";
import LinkedInIcon from "./LinkedInIcon";
import EmailIcon from "./EmailIcon";

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
        <div className="flex flex-row items-start justify-start gap-[0.937rem]">
          <FacebookIcon />
          <InstagramIcon />
          <LinkedInIcon />
        </div>
      </div>
      <div className="absolute bottom-[3.563rem] left-[10rem] w-[70rem] h-[1.625rem] flex flex-row items-center justify-between text-[1rem] text-soft-grey font-body">
        <div className="flex flex-row items-start justify-start gap-[0.812rem]">
          <EmailIcon />
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
