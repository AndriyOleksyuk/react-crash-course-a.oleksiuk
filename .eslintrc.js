module.exports = {
    "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended", "prettier/react"],
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node": true
    },
    "globals": {
        "test": true,
        "expect": true,
    },
    "settings": {
        "react": {
            "version": "16.11.0"
        }
    }
}
