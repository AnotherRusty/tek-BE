/* eslint-disable @next/next/no-img-element */
import {
  CheckHoldingIcon,
  PasteIcon,
  PolygonIcon,
} from "../components/SvgList";

const WalletChecker = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <h1 className="md:text-[48px] text-[30px] font-extrabold text-center bg-gradient-to-r from-[#6BF58C] to-[#148F2F] bg-clip-text text-transparent md:leading-[65px] leading-[50px]">
        {`CHECK YOUR $TEK`} <br />
        {` HOLDINGS`}
      </h1>
      <div className="md:w-[626px] w-full flex gap-[14px] flex-col mt-[200px]">
        <div className="bg-black bg-opacity-40 rounded-[24px] md:p-8 p-6 flex gap-[14px] flex-col w-full">
          <div className="gap-2 flex items-center justify-start">
            <PasteIcon />
            <p className="uppercase md:text-[16px] text-[14px] text-white text-opacity-40 font-bold">{`paste your wallet address`}</p>
          </div>
          <div className="w-full bg-white bg-opacity-10 rounded-md flex items-center justify-between md:p-5 p-3">
            <input
              className="h-[28px] md:text-[16px] text-[14px] w-[90%] bg-transparent placeholder:font-bold placeholder:uppercase placeholder:md:text-[16px] placeholder:text-[14px] outline-none text-white placeholder:text-[#7A787A] font-bold"
              placeholder="Please drop your address"
            />
            <PolygonIcon />
          </div>
          <button className="w-full p-[13px] rounded-md bg-gradient-to-tr from-[#6BF58C] to-[#148F2F] flex items-center justify-center gap-4 shadow-inner">
            <p
              className="md:text-[16px] text-[14px] font-bold text-white uppercase"
              style={{
                textShadow: "0 1px 0px rgba(0, 25, 66, 0.4)",
              }}
            >{`CHECK YOUR $TEK HOLDINGS`}</p>
            <CheckHoldingIcon />
          </button>
        </div>
        <div className="w-full flex items-center justify-center gap-6 rounded-3xl bg-white bg-opacity-10 p-[24px]">
          <p className="text-white md:text-[16px] text-[14px] uppercase font-bold">{`BUY TEKIO & START MINING`}</p>
          <img
            src="/imgs/dewIcon.png"
            className="md:w-[40px] md:h-[40px] w-[20px] h-[20px]"
            alt="Dew Icon"
          />
        </div>
      </div>
    </div>
  );
};

export default WalletChecker;
