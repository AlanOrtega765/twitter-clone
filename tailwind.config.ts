import TailwindAnimated from 'tailwindcss-animated';
import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  theme: {
    extend: {},
    fontFamily: {
      poppins: ['Poppins', 'ui-sans-serif'],
    },
  },
  plugins: [TailwindAnimated],
};
