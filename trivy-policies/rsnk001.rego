package user.dockerfile.RSNK001

deny contains res if {
  res := {
    "id": "RSNK001",
    "msg": sprintf("RSNK_TRIVY_EVAL_%s", ["OK"]),
    "severity": "LOW",
    "startline": 1,
    "endline": 1,
  }
}
