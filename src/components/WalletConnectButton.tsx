/* eslint-disable @next/next/no-img-element */
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "animate.css";

const WalletConnectBtn = () => {
  return (
    <div className="flex items-start md:justify-start justify-end flex-col gap-[32px] animate__animated animate__fadeIn mt-3">
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        }) => {
          // Note: If your app doesn't use authentication, you
          // can remove all 'authenticationStatus' checks
          const ready = mounted && authenticationStatus !== "loading";
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus || authenticationStatus === "authenticated");

          return (
            <div
              {...(!ready && {
                "aria-hidden": true,
                style: {
                  opacity: 0,
                  pointerEvents: "none",
                  userSelect: "none",
                },
              })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <button
                      onClick={openConnectModal}
                      type="button"
                      className="text-[#68FFA9] text-[16px] font-bold uppercase bg-[#051A25] px-[10px] py-[8px]
                       rounded-xl"
                    >
                      <p
                        style={{
                          textShadow: "0 1px 0px rgba(0, 25, 66, 0.4)",
                        }}
                      >
                        Connect Wallet
                      </p>
                    </button>
                  );
                }

                if (chain.unsupported) {
                  return (
                    <button onClick={openChainModal} type="button">
                      Wrong network
                    </button>
                  );
                }

                return (
                  <div className="flex md:flex-row flex-col items-center gap-[10px] mt-2 md:justify-center justify-end">
                    <button
                      onClick={openChainModal}
                      type="button"
                      className="text-white text-[16px] font-bold uppercase bg-[#051A25] px-[13px] py-[8px]
                      rounded-xl"
                    >
                      {chain.hasIcon && (
                        <div className="text-[#68FFA9] flex gap-1 items-center justify-center">
                          {chain.iconUrl && (
                            <img
                              alt={chain.name ?? "Chain icon"}
                              src={chain.iconUrl}
                              style={{ width: 20, height: 20 }}
                            />
                          )}
                          {13.43}
                          {` MATIC`}
                        </div>
                      )}
                    </button>

                    <button
                      onClick={openAccountModal}
                      type="button"
                      className="text-[#68FFA9] flex items-center justify-center gap-[6px] text-[16px] font-bold uppercase bg-[#051A25] px-[20px] py-[8px] rounded-xl"
                    >
                      <img src="/imgs/metamask.png" alt="Metamask" />
                      {account.displayName.slice(0, 4) +
                        "..." +
                        account.displayName.slice(-4)}
                    </button>
                  </div>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>
    </div>
  );
};

export default WalletConnectBtn;
