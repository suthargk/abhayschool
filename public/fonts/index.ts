import localFont from 'next/font/local'
export const Wotfard = localFont({
  src: [
    {
      path: "./Wotfard-Bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./Wotfard-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Wotfard-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Wotfard-SemiBold.ttf",
      weight: "600",
      style: "bold",
    },
  ],
});
