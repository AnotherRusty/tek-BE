/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import {
  CheckHoldingIcon,
  PasteIcon,
  PolygonIcon,
} from "../components/SvgList";
import axios from "axios";

const WalletChecker = () => {
  const [address, setAddress] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [bronze, setBronze] = useState<number>(0)
  const [silver, setSilver] = useState<number>(0)
  const [gold, setGold] = useState<number>(0)
  const [diamond, setDiamond] = useState<number>(0)

  const fetch = async () => {
    try {
      if (!address) return
      setLoading(true)
      const res: any = (await axios.post('https://tekio-io.vercel.app/api/users/amount', { address })).data
      setBronze(res.bronze)
      setSilver(res.silver)
      setGold(res.gold)
      setDiamond(res.diamond)
      setLoading(false)
    } catch (e) {
      setBronze(0)
      setSilver(0)
      setGold(0)
      setDiamond(0)
      setLoading(false)
      console.log(e)
    }
  }

  return (
    <div className="relative flex flex-col justify-center items-center w-full">
      {/* {loading && <div className="top-0 left-0 fixed bg-[#6d6d6d8a] backdrop-blur-md w-[100vw] h-[100vh]"></div>} */}
      <div className="top-[120px] md:top-[150px] right-0 left-0 -z-[9997] absolute flex justify-center items-center rounded-full filter">
        <img
          src="/imgs/centerMark.png"
          className="-z-[9998] opacity-20 md:opacity-20 mr-[20px] w-[370px] h-full"
          alt="CenterMark"
        />
      </div>
      <h1 className="bg-clip-text bg-gradient-to-r from-[#6BF58C] to-[#148F2F] font-extrabold text-[30px] text-center text-transparent md:text-[48px] leading-[50px] md:leading-[65px]">
        {`CHECK YOUR $TEK`} <br />
        {` HOLDINGS`}
      </h1>
      <div className="flex flex-col gap-[14px] mt-[200px] w-full md:w-[626px]">
        <div className="flex flex-col gap-[14px] bg-black bg-opacity-40 p-6 md:p-8 rounded-[24px] w-full">
          <div className="flex justify-start items-center gap-2">
            <PasteIcon />
            <p className="font-bold text-[14px] text-white md:text-[16px] text-opacity-40 uppercase">{`paste your wallet address`}</p>
          </div>
          <div className="flex justify-between items-center bg-white bg-opacity-10 p-3 md:p-5 rounded-md w-full">
            <input
              className="bg-transparent w-[90%] h-[28px] font-bold placeholder:font-bold text-[14px] text-white md:text-[16px] placeholder:md:text-[16px] placeholder:text-[#7A787A] placeholder:text-[14px] placeholder:uppercase outline-none"
              placeholder="Please drop your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <PolygonIcon color={""} />
          </div>
          <button className="flex justify-center items-center gap-4 bg-gradient-to-tr from-[#6BF58C] hover:from-[#6bf58b8a] to-[#148F2F] hover:to-[#148f2f85] shadow-btn p-[13px] rounded-md w-full">
            <p
              className="font-bold text-[14px] text-white md:text-[16px] uppercase"
              style={{
                textShadow: "0 1px 0px rgba(0, 25, 66, 0.4)",
              }}
              onClick={() => fetch()}
            >{`CHECK YOUR $TEK HOLDINGS`}</p>
            <CheckHoldingIcon />
          </button>
          <div className="flex justify-between text-white">
            <div className="flex justify-center items-center gap-3"><img src="/imgs/bronze.png" className="w-10 h-10 object-cover" alt="mark" />
              <p className="font-bold text-white text-xl">{bronze}</p></div>
            <div className="flex justify-center items-center gap-3"><img src="/imgs/silver.png" className="w-10 h-10 object-cover" alt="mark" />
              <p className="font-bold text-white text-xl">{silver}</p></div>
            <div className="flex justify-center items-center gap-3"><img src="/imgs/gold.png" className="w-10 h-10 object-cover" alt="mark" />
              <p className="font-bold text-white text-xl">{gold}</p></div>
            <div className="flex justify-center items-center gap-3"><img src="/imgs/diamond.png" className="w-10 h-10 object-cover" alt="mark" />
              <p className="font-bold text-white text-xl">{diamond}</p></div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-6 bg-white bg-opacity-10 p-[24px] rounded-3xl w-full">
          <p className="font-bold text-[14px] text-white md:text-[16px] uppercase">{`BUY TEKIO & START MINING`}</p>
          <img
            src="/imgs/dewIcon.png"
            className="w-[20px] md:w-[40px] h-[20px] md:h-[40px]"
            alt="Dew Icon"
          />
        </div>
      </div>
    </div>
  );
};

export default WalletChecker;
