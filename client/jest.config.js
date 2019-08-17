module.exports = {
  verbose: true,
  "collectCoverageFrom": [
    "!/node_modules/*"
  ],
  transformIgnorePatterns: [
    "/node_modules/(?!MODULE_NAME_HERE).+\\.js$"
  ],
  "transform": {
    "^.+\\.jsx?$": "./wrapper.js",
    "^.+\\.(js|jsx|ts)$": "babel-jest",
  },
};
