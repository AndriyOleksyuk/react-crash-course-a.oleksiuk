module.exports = {
    "*.js": ["yarn test", "yarn lint", "git add"],
    "*.json": ["prettier --write", "git add"],
    "*.css": ["prettier --write", "git add"]
}
