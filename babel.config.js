/* eslint-disable */

module.exports = (api) => {
  return {
    plugins: ["@babel/plugin-transform-class-static-block"],
    presets: [["@quasar/babel-preset-app", api.caller((caller) => caller && caller.target === "node") ? { targets: { node: "current" } } : {}]],
  };
};
