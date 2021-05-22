module.exports = {
  config: {
    tailwindjs: './tailwind.config.js',
    port: 6000, // よくわからないけど6001になる
  },
  paths: {
    root: './dist',
    src: {
      base: './src',
      css: './src/assets/scss',
      js: './src/assets/js',
      img: './src/assets/images',
      icons: './src/assets/icons',
    },
    dist: {
      base: './dist',
      css: './dist/assets/css',
      js: './dist/assets/js',
      img: './dist/assets/images',
      icons: './dist/assets/icons',
    },
    build: {
      base: './build',
      css: './build/assets/css',
      js: './build/assets/js',
      img: './build/assets/images',
      icons: './build/assets/icons',
    },
  },
  icons: [
    [16, 16],
    [32, 32],
    [48, 48],
    [57, 57],
    [76, 76],
    [120, 120],
    [128, 128],
    [152, 152],
    [167, 167],
    [180, 180],
    [192, 192],
    [512, 512],
  ],
};
