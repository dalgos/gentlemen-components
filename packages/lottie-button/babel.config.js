const presets = [
  [
    "@babel/env",
    {
      targets: {
        ie: "11",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: "usage",
    },
  ],
  "@babel/preset-react",
];

module.exports = { presets };
