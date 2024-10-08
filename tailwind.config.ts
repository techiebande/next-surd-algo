import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        "surd-dark-blue": "#0E0E23",
        "surd-blue-1": "#1D82F5",
        "surd-blue-2": "#098DD6",
        "surd-blue-3": "#0E0E23",
        "surd-grey-1": "#626972",
        "surd-grey-2": "#7070707F",
        "surd-grey-3": "#080e17",
        "surd-grey-4": "#8994A3",
        "surd-grey-5": "#EAEDF7",
        "surd-grey-6": "#374C6742",
        "surd-grey-7": "#141c2c",
        "surd-grey-8": "#99A5B5",
        "surd-grey-9": "#141e2c",
        "surd-black-1": "#393939",
        "surd-black-2": "#323232",
        "surd-yellow-1": "#FFC960",
        "surd-orange-1": "#EF9D27",
        "surd-white-1": "#f6f6f6",
        "surd-green-1": "#2BBB0845",
        bodyBg: "#EAEDF7",
        sideBarBg: "#0E0E23",
        loginBg: "#E8EEF3",
        // blue: "#1D82F5",
        blue2: "#E6F3F9",
        lightBlue: "#E4E7EB",
        inputBg: "#F6F6F6",
        brightRed: "#F05E78",
        red2: "#BE000033",
        grey1: "#626972",
        grey2: "#EEEBEB",
        grey3: "#8994A3",
        grey4: "#F5F5F5",
        grey5: "#6259CA",
        grey6: "#99A5B5",
        grey7: "#707070",
        grey10: "#E5E5E5",
        darkBlue: "#171F29",
        darkBlue2: "#200E32",
        grey8: "#8994A30D",
        grey9: "#E8E8F7",
        green: "#00AF2F",
        green2: "#2495A3",
        lightGreen: "#B7DFDD",
        darkGreen: "#023020",
        // red: "#BE0000",
        // orange: "#ED6E00",
        pending: "#FFCC00",
        black2: "#171F29",
        black3: "#1C2030",
        transparentBlack: "rgba(0,0,0,0.8)",
        // purple: "#8120F4",
        grey11: "#272739",
        grey12: "#393939",
        grey13: "#6E6E6E",
        grey14: "#252538",
        grey15: "#BEC4CC",
        grey16: "#1f1f2d",
      },
      borderRadius: {
        // md: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "surd-rounded-10px": "10px",
        "surd-rounded-30px": "30px",
        "surd-rounded-20px": "20px",
      },
      boxShadow: {
        "surd-box-shadow-1": "0px 0px 10px #00000029",
        "surd-box-shadow-2": "0px 0px 6px #00000029",
      },
      fontFamily: {
        segoeUI: ["var(--font-segoe-ui)"],
        segoeUIBold: ["var(--font-segoe-ui-semibold)"],
        segoeUISemiBold: ["var(--font-segoe-ui-bold)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
