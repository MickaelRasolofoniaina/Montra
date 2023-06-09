module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            models: "./src/models",
            definitions: "./src/definitions",
            constants: "./src/constants",
            components: "./src/components",
            utils: "./src/utils",
            assets: "./src/assets",
            images: "./src/assets/images"
          },
        }
      ],
      "react-native-reanimated/plugin",
      require.resolve("expo-router/babel")
    ]
  };
};
