---
title: Ambari to Opsgenie
summary: Monitoring / Forwarder server from Ambari alerts to Opsgenie
tags:
- Monitoring
- Alerting
- API
- Go
date: "2024-04-29T00:00:00Z"

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Photo by rgaleriacom (Unsplash)
  focal_point: Smart

links:
- icon: github
  icon_pack: fab
  name: Code
  url: https://github.com/davidaparicio/ambari-to-opsgenie/
url_code: ""
url_pdf: ""
url_slides: ""
url_video: ""

---

The project "ambari-to-opsgenie" is a Go server that forwards [Ambari](https://ambari.apache.org/) alerts to [OpsGenie](https://www.atlassian.com/software/opsgenie). It includes additional features such as integration with [Blinky](https://www.getblinky.io/) and [xbar for MacOS](https://github.com/matryer/xbar). Users can customize configurations, crypted by [SOPS](https://github.com/getsops/sops)/[Age](https://github.com/FiloSottile/age), and integrate it into their systems using specific commands provided in the repository. This open-source project is licensed under the MIT License​. For more details, you can visit the repository [here](https://github.com/davidaparicio/ambari-to-opsgenie/).