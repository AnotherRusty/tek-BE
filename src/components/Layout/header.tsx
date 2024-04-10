/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { CloseIcon, MobileMenuIcon } from "../SvgList";
import Link from "next/link";
import { useRouter } from "next/router";
import WalletConnectBtn from "../WalletConnectButton";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <div className="md:px-5 px-4 xl:min-w-[1200px] w-full flex items-start justify-between z-0 relative">
          <div className="items-center justify-center mt-[10px]">
            <Link href={"/stake"}>
              <div className="bg-[#041A25] rounded-[10px] flex flex-col gap-1 p-[6px]">
                <img src="/imgs/logo.png" className="object-cover" />
                <p className="text-[#44e4bc] text-[16px] font-bold text-center uppercase">
                  coin <br />
                  flip
                </p>
              </div>
            </Link>
          </div>
          <WalletConnectBtn />
        </div>
      </div>
      {/* <div className="relative flex items-center justify-between w-full p-7 border-b-[1px] border-white border-opacity-10 xl:hidden">
        <div
          className="relative flex items-center justify-center cursor-pointer z-[1]"
          onClick={() => setShowMenu(true)}
        >
          <MobileMenuIcon />
        </div>
        <div className="absolute left-0 right-0 z-0 flex items-center justify-center w-full">
          <img
            src="/imgs/logo.png"
            alt=""
            className="w-[48px] h-[50px] object-cover"
          />
        </div>
        <div className="flex items-center gap-[20px] ">
          <img src="/imgs/magiceden.png" alt="" />
          <img src="/imgs/discord.png" alt="" />
        </div>
      </div> */}
      {/* {showMenu && (
        <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-start w-full bg-black bg-opacity-80 backdrop-blur-md z-[9999] flex-col animate__animated animate__fadeIn animate__faster  ">
          <p className="text-white text-[50px] font-bold uppercase mt-[72px]">
            Navigation
          </p>
          <div className="flex flex-col items-center justify-center w-full mt-10 gap-7">
            <Link href={"/"} onClick={() => setShowMenu(false)}>
              <p
                className={`text-white text-[30px] font-bold uppercase ${
                  router.pathname === "/" && "text-yellow-400"
                }`}
              >
                Home
              </p>
            </Link>

            <span className="w-[1px] h-[30px] bg-white bg-opacity-20" />
            <Link href={"/stake"} onClick={() => setShowMenu(false)}>
              <p
                className={`text-white text-[30px] font-bold uppercase ${
                  router.pathname === "/stake" && "text-yellow-400"
                }`}
              >
                stake
              </p>
            </Link>
            <WalletConnectBtn />
          </div>
          <div className="w-full flex items-center justify-center gap-[20px] mt-[60px]">
            <img src="/imgs/opensea.png" alt="" className="cursor-pointer" />
            <img src="/imgs/magiceden.png" alt="" className="cursor-pointer" />
            <img src="/imgs/discord.png" alt="" className="cursor-pointer" />
            <img src="/imgs/twitter.png" alt="" className="cursor-pointer" />
          </div>
          <div
            className={`absolute bottom-[33px] text-white w-full flex items-center justify-center`}
          >
            <button
              className="bg-transparent rounded-md px-[10px] py-[14px] border-[1px] border-white border-opacity-25 flex items-center justify-between gap-[9px] cursor-pointer"
              onClick={() => setShowMenu(false)}
            >
              <CloseIcon />
              <span className="text-white">CLOSE NAVIGATION</span>
            </button>
          </div>
        </div>
      )} */}
    </>
  );
};

export default Header;
