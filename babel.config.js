module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo', 
      'module:metro-react-native-babel-preset'
    ],
    plugins: [
      'react-native-reanimated/plugin', 
      ['module-resolver', {
        'root': ['./'],
        'alias': {
          'assets': './assets',
          'components': './components',
          'constants': './constants',
          'hooks': './hooks',
          'screens': './screens',
        }
      }]
    ]
  };
};
