import type { NextPage } from "next";
import {
  CheckHoldingIcon,
  LeftArrow,
  PolygonIcon,
  RightArrow,
} from "../components/SvgList";
const CoinFlipBet: NextPage = () => {
  const betAmount = ["10", "20", "50", "100"];
  return (
    <div className="md:w-[550px] w-full bg-[#000000] bg-opacity-30 rounded-3xl flex items-center justify-center flex-col gap-8 p-6 mt-[40px]">
      <div className="w-full flex md:items-center items-start justify-between">
        <p className="uppercase text-[16px] font-bold text-[#FFFFFF66]">
          select or input your bet
        </p>
        <div className="flex items-center justify-center gap-1">
          <div className="uppercase text-[16px] font-bold text-[#FFFFFF66] flex items-center justify-between gap-1 md:flex-row flex-col">
            balanse:{` `}
            <span className="text-[#3EDE74]">
              {Number(`343455.23`).toLocaleString()}
            </span>
            <PolygonIcon color={"#3EDE74"} />
          </div>
        </div>
      </div>
      <div className="w-full bg-white bg-opacity-10 rounded-xl flex items-center justify-between md:p-5 p-3">
        <div className="flex items-center justify-start gap-2 w-full">
          <PolygonIcon color={""} />
          <input
            type="number"
            className="h-[28px] md:text-[16px] text-[14px] w-[90%] bg-transparent placeholder:font-bold placeholder:uppercase placeholder:md:text-[16px] placeholder:text-[14px] outline-none text-white placeholder:text-[#7A787A] font-bold"
            placeholder="enter matic amount"
          />
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="rounded-full bg-black p-1 cursor-pointer">
            <LeftArrow />
          </div>
          <div className="rounded-full bg-black p-1 cursor-pointer">
            <RightArrow />
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-4 gap-2">
        {betAmount.map((data, index) => (
          <div
            className="bg-white bg-opacity-10 flex items-center justify-center gap-1 cursor-pointer py-2 px-4 rounded-xl"
            key={index}
          >
            <PolygonIcon color={""} />
            <p className="text-[#7A787A] font-bold">{data}</p>
          </div>
        ))}
      </div>
      <button className="w-full p-[13px] rounded-md bg-gradient-to-tr from-[#6BF58C] to-[#148F2F] flex items-center justify-center gap-4  shadow-btn">
        <p
          className="md:text-[16px] text-[14px] font-bold text-white uppercase"
          style={{
            textShadow: "0 1px 0px rgba(0, 25, 66, 0.4)",
          }}
        >{`DOUBLE OR NOTHING`}</p>
        <CheckHoldingIcon />
      </button>
    </div>
  );
};

export default CoinFlipBet;
