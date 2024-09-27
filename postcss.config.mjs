/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {}, // Tailwind CSS plugin
    autoprefixer: {}, // Autoprefixer plugin
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}), // Conditionally adding cssnano
  },
};

export default config;
