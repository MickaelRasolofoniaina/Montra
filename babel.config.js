module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            modules: './src/modules',
            constants: './src/constants',
            utils: './src/utils',
            assets: './assets',
          },
        }
      ],
      'react-native-reanimated/plugin'
    ]
  };
};
