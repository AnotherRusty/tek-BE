import type { NextPage } from "next";
import { BetOnIcon } from "../../components/SvgList";
import CoinFlipBet from "../../modules/CoinFlipBet";
const CoinFlip: NextPage = () => {
  return (
    <div className="flex flex-col items-center transition-all duration-300">
      <div className="w-full max-w-[1000px] flex md:mt-[20px] mt-[80px] items-center justify-center p-3 relative flex-col animate__animated animate__fadeIn">
        <div className="rounded-full">
          <img
            src="/imgs/coinFlipCenterMark.png"
            className="w-[190px] h-[190px] object-cover shadow-coinMark flex-shrink-0 rounded-full"
          />
        </div>
        <div className="flex items-center justify-center gap-[10px] px-2 py-[3px] bg-[#130E12] rounded-xl shadow-beton mt-[50px] cursor-pointer">
          <p className="text-[#68FFA9] text-center text-[30px] font-bold uppercase">
            i bet on
          </p>
          <BetOnIcon />
        </div>
        <div className="flex items-center justify-center gap-4 mt-[40px]">
          <div className="flex items-center justify-center cursor-pointer flex-col gap-4 rounded-[10px] border-[2px] border-[#5F5F5F] bg-[#ffffff15] p-6">
            <div className="bg-white bg-opacity-50 rounded-full w-[80px] h-[80px]"></div>
            <p className="text-[#fff] text-[20px] font-bold uppercase">head</p>
          </div>
          <div className="flex items-center justify-center cursor-pointer flex-col gap-4 rounded-[10px] border-[2px] border-[#5F5F5F] bg-[#ffffff15] p-6">
            <div className="bg-white bg-opacity-50 rounded-full w-[80px] h-[80px]"></div>
            <p className="text-[#fff] text-[20px] font-bold uppercase">tails</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-[10px] px-2 py-[3px] bg-[#130E12] rounded-xl shadow-beton mt-[50px] cursor-pointer">
          <p className="text-[#68FFA9] text-center text-[30px] font-bold uppercase">
            bet for
          </p>
        </div>
        <CoinFlipBet />
      </div>
    </div>
  );
};

export default CoinFlip;
