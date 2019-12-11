module.exports = {
    "*.js": ["yarn test", "yarn lint --findRelatedTests", "git add"],
    "*.json": ["prettier --write --findRelatedTests", "git add"],
    "*.css": ["prettier --write --findRelatedTests", "git add"]
}
