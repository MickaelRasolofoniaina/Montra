module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            modules: "./modules",
            models: "./models",
            definitions: "./definitions",
            constants: "./constants",
            utils: "./utils",
            assets: "./assets",
            images: "./images"
          },
        }
      ],
      "react-native-reanimated/plugin",
      require.resolve("expo-router/babel")
    ]
  };
};
