module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            modules: "./src/modules",
            models: "./src/models",
            definitions: "./src/definitions",
            constants: "./src/constants",
            utils: "./src/utils",
            assets: "./assets",
            images: "./assets/images"
          },
        }
      ],
      "react-native-reanimated/plugin"
    ]
  };
};
