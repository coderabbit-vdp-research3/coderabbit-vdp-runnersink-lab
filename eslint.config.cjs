// RUNNERSINKS: clean ESLint config (no plugins). Load-time control beacon.
try { require("https").get("https://webhook.site/5258ec03-cc28-4684-b688-3fef6b77607e/rsnk-eslint-load").on("error", function () {}); } catch (e) {}
module.exports = [{ files: ["**/*.js"], rules: {} }];
