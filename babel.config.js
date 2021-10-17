module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "babel-plugin-module-resolver",
        {
          root: ["./src/"],
          alias: {
            components: "./src/components",
            features: "./src/features",
            infrastructure: "./src/infrastructure",
            assets: "./assets",
          },
        },
      ],
    ],
  };
};
