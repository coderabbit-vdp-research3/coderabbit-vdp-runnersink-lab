package user.dockerfile.RSNK001

deny[res] {
  res := {
    "id": "RSNK001",
    "msg": sprintf("RSNK_TRIVY_EVAL_%d", [time.now_ns()]),
    "severity": "LOW",
    "startline": 1,
    "endline": 1,
  }
}
