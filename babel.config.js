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
            types: "./src/types",
            constants: "./src/constants",
            components: "./src/components",
            utils: "./src/utils",
            assets: "./src/assets",
            images: "./src/assets/images",
            layouts: "./src/layouts"
          },
        }
      ],
      "react-native-reanimated/plugin",
      require.resolve("expo-router/babel")
    ]
  };
};
