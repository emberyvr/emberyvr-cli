/*eslint-env node */

module.exports = {
  "root": true,
  "ecmaFeatures": {
    "modules": true,
    "jsx": true
  },
  "env": {
    "browser": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "no-extra-semi": "error",
    "semi-spacing": [
      "error", {
        "before": false,
        "after": true
      }
    ],
    "no-unexpected-multiline": "error",
    "semi": "always"
  },
  "extends": "eslint:recommended",
  "globals": {
    "$": 1,
    "_": 1,
  },

  "rules": {
    "no-unused-vars": [1, {
      "varsIgnorePattern": "_",
      "argsIgnorePattern": "_"
    }],
    "no-extra-semi": 2,
    "semi-spacing": [
      2, {
        "before": false,
        "after": true
      }
    ],
    "no-unexpected-multiline": 2,
    "semi": 2,
    "comma-dangle": ["error", "only-multiline"]
  }
};
