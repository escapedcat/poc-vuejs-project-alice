module.exports = {
    "extends": [
        "airbnb-base",
        "plugin:vue/essential"
    ],
    "overrides": [
        {
        "files": ["**/*+(spec|test).js"],
        "globals": {
          "describe": true,
          "it": true,
          "expect": true
        }
      }
    ]    
};