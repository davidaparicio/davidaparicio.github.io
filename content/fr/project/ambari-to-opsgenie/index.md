---
title: Ambari vers Opsgenie
summary: Monitoring / Serveur qui transfère les alertes d'Ambari vers Opsgnie
tags:
- Monitoring
- Alerting
- API
- Go
date: "2024-04-29T00:00:00Z"

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Photo de rgaleriacom (Unsplash)
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

Le projet Go "ambari-to-opsgenie" héberge un serveur conçu pour transférer les alertes [Ambari](https://ambari.apache.org/) vers [OpsGenie](https://www.atlassian.com/software/opsgenie). Il inclut des intégrations supplémentaires telles que [Blinky](https://www.getblinky.io/) et [xbar pour MacOS](https://github.com/matryer/xbar), permettant une personnalisation via des fichiers de configuration chiffrés par [SOPS](https://github.com/getsops/sops)/[Age](https://github.com/FiloSottile/age). Ce projet est open source sous licence MIT. Plus d'informations sur le repository Github [ici](https://github.com/davidaparicio/ambari-to-opsgenie/).