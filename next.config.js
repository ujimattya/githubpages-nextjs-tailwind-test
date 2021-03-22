const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
module.exports = withPlugins([
  [optimizedImages, {
    mozjpeg: {
      quality: 80,
    },
    pngquant: {
      speed: 3,
      strip: true,
      verbose: true,
    },
    imagesPublicPath: '/githubpages-nextjs-tailwind-test/_next/static/images/',
  }],
  {
    basePath: '/githubpages-nextjs-tailwind-test',
    assetPrefix: '/githubpages-nextjs-tailwind-test/',
    env,
  },
]);