module.exports = {
    "extends": ["eslint:recommended", "plugin:react/recommended"],
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
