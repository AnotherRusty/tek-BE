/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 2px 1px #ffffffB3",
        token: "3px 2px 2px 2px #0000006e",
        progress: "0 3px 13px 0 rgba(99, 170, 227, 0.45)",
        walletBtn: "0 1px 1px 0 rgba(0, 25, 66, 0.4)",
        roadmapImg: "0 30px 66px 0 #1E3C34A9",
        nftImgShadow: "shadow 0px 4px 0px 0px #ffffff4d",
        coinMark: '0px 111px 31px 0px rgba(0, 0, 0, 0.01), 0px 71px 28px 0px rgba(0, 0, 0, 0.09), 0px 40px 24px 0px rgba(0, 0, 0, 0.30);',
        beton: '0px 1px 1px 0px rgba(0, 0, 0, 0.30)',
        btn: '0px -2px 0px 0px rgba(0, 0, 0, 0.25) inset, 0px 2px 2px 0px rgba(0, 0, 0, 0.45), 0px 1px 0px 0px rgba(255, 255, 255, 0.25) inset'

      },
      textShadow: {
        walletBtn: "0 1px 1px 0 rgba(0, 25, 66, 0.4)",
      },
    },
  },
  plugins: [],
};
