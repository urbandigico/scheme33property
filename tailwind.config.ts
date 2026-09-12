import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: { colors: { navy: "#122742", paper: "#f7fafc" } } },
  plugins: [],
} satisfies Config;
