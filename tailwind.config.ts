import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: "#e0ffff", // Very light cyan
          100: "#b3ffff", // Light cyan
          200: "#80ffff", // Lighter cyan
          300: "#4dffff", // Light vibrant cyan
          400: "#26ffff", // Slightly less bright cyan
          500: "#00ffff", // Bright cyan (logo color)
          600: "#00e6e6", // Slightly darker cyan
          700: "#00bfbf", // Darker cyan
          800: "#009999", // Even darker cyan
          900: "#007373", // Very dark cyan
          950: "#004d4d", // Near black cyan
        },
        secondary: {
          50: "#ffe0f5", // Very light pink
          100: "#ffb3e6", // Light pink
          200: "#ff80d8", // Soft pink
          300: "#ff4dcc", // Vibrant pink
          400: "#ff26bf", // Bright pink-purple
          500: "#ff00b3", // Main secondary color (magenta-pink)
          600: "#e600a1", // Slightly darker magenta
          700: "#bf0085", // Dark magenta
          800: "#99006a", // Deeper magenta
          900: "#730052", // Very dark magenta
          950: "#4d0038", // Near black magenta
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
