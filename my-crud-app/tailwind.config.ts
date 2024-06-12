import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'military-green': '#4B5320',
      },
    },
  },
  plugins: [],
};

export default config;
