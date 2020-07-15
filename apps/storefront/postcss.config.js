module.exports = {
  plugins: [
    'tailwindcss',
    ...(process.env.NODE_ENV === 'production'
      ? [
          [
            '@fullhuman/postcss-purgecss',
            {
              content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
              whitelist: ['html', 'body', 'path', 'svg'],
              whitelistPatterns: [/carousel/, /slide/],
              whitelistPatternsChildren: [/carousel/, /slide/],
              defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
            },
          ],
        ]
      : []),
    'postcss-preset-env',
  ],
};
