/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FBF5E9",
        ink: "#221D18",
        indigo: {
          DEFAULT: "#1A1611",
          dark: "#100D0A",
          light: "#332C24",
        },
        marigold: {
          DEFAULT: "#F4B91A",
          light: "#FBDD8E",
          dark: "#C98F0A",
        },
        brick: {
          DEFAULT: "#C41230",
          dark: "#8C0D22",
          light: "#E14B62",
        },
        leaf: {
          DEFAULT: "#A6690F",
          light: "#D9A24C",
          dark: "#7A4B09",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-manrope)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        "drift-a": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(40px, -30px) scale(1.12)" },
        },
        "drift-b": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-35px, 25px) scale(1.08)" },
        },
        "drift-c": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(20px, 20px) scale(1.15)" },
        },
        shine: {
          "0%": { transform: "translateX(-60%) rotate(8deg)" },
          "100%": { transform: "translateX(160%) rotate(8deg)" },
        },
        bubble: {
          "0%": { transform: "translateY(0) translateX(0) scale(0.8)", opacity: "0" },
          "15%": { opacity: "0.7" },
          "85%": { opacity: "0.5" },
          "100%": { transform: "translateY(-220px) translateX(15px) scale(1.15)", opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "text-shine": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      animation: {
        "drift-a": "drift-a 12s ease-in-out infinite",
        "drift-b": "drift-b 16s ease-in-out infinite",
        "drift-c": "drift-c 9s ease-in-out infinite",
        shine: "shine 7s ease-in-out infinite",
        bubble: "bubble 9s ease-in-out infinite",
        marquee: "marquee 36s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
        "fade-up": "fade-up 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
        "text-shine": "text-shine 3.5s linear infinite",
      },
    },
  },
  plugins: [],
};
