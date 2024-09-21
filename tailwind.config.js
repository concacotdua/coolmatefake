/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url(/banner.png)",
        banner2: "url(/banner2.png)",
        banner3: "url(/banner3.png)",
        banner4: "url(/banner4.png)",
        item1:
          "url('https://media3.coolmate.me/cdn-cgi/image/width=160,height=160,quality=85/uploads/April2024/promax_polo_den113_4.jpg')",
      },
    },
  },
  plugins: [],
};
