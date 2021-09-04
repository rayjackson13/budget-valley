module.exports = function Module(api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      'module:metro-react-native-babel-preset',
    ],
    plugins: [
      ['module-resolver', {
        root: ['./'],
        alias: {
          assets: './assets',
          components: './components',
          constants: './constants',
          hooks: './hooks',
          screens: './screens',
        },
      }],
    ],
  };
};
