---
title: Voivi
summary: Multi-cloud / Un système de recommendation sans confiance préservant la vie privée
tags:
- Multi-cloud
- DevOps
- Docker
- Kubernetes
- Vert.X
- SMPC
date: "2017-02-27T00:00:00Z"

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Rawpixel (pixabay.com)
  focal_point: Smart

links:
- icon: github
  icon_pack: fab
  name: Code (multicloud)
  url: https://github.com/davidaparicio/voivi_cloud
- icon: github
  icon_pack: fab
  name: Code (monolithe)
  url: https://github.com/davidaparicio/voivi_standalone
url_code: ""
url_pdf: "papers/2016_draft_proposal_paper_fr.pdf"
url_slides: "papers/2015_14th_MDPS.pdf"
url_video: ""

---

Ce projet multi-cloud a été créé pour mettre en pratique les techniques de SMPC (Secure Multiparty Computation), le réseau TOR (Onion Routing) ainsi que les mécanismes de préservation de la confidentialité/vie privée (Zero-trust) pour vérifier les hypothèses de la thèse. L'application a été utilisé durant les [Débats présidentiels de 2016 aux États-Unis](https://en.wikipedia.org/wiki/2016_United_States_presidential_debates) en mesurant en temps réel, tous les tweets de la plate-forme Twitter sur le sujet (analyse des sujets/thèmes et du sentiment favorable ou défavorable à l'égard d'un des candidats). Durant le second débat, en l'espace de 48h, le service a traité plus de 1,78 milliard de tweets, représentant plus d'une 15Go, réparti entre les clouds d'AWS/GCP/Azure/Heroku. Pour traiter avec peu de latence cette volumétrie, un mécanisme d'auto-scaling a été mis en place. Enfin, j'ai tout scripté le déploiement et l'execution afin de faciliter la méthode DevOps.


Détails de la stack technique:
* AWS, GCP, Azure et Heroku
* Vert.X 3.3.3, avec Hazelcast 3.7.2
* Maven 3.5.1 et SLJF4j 1.7.21
* JUnit 4.12, REST-assured 3.0, Assertj 3.5.1
* JClouds 1.9.2
* Kubernetes 1.14 (Mai 2019) et les premiers tests de Ubernetes (K8s Federation)
* MongoDB 1.50.5
* Stanford NLP 3.6

{{% callout note %}}
De nos jours, Les systèmes de réputation sont importants pour les applications distribuées, dans lesquelles les utilisateurs doivent être rendus responsables de leurs actions, comme les sites d'e-commerce ou les systèmes de vote électronique. En effet, ils sont la base des systèmes de recommendations en ajoutant les données des ventes. Cependant, les systèmes existants révèlent souvent l'identité des évaluateurs, ce qui peut dissuader les utilisateurs honnêtes de publier des évaluations, par crainte de représailles de la part des évaluateurs. Bien que de nombreux systèmes de réputation préservant la vie privée aient été proposés, aucun d'entre eux n'était à la fois véritablement décentralisé, fiable et adapté à un usage réel, par exemple dans les applications de commerce électronique. Après avoir discuté des faiblesses et des lacunes des solutions existantes, nous présenterons notre propre système de réputation sans confiance basé sur la fusion des techniques de Tor avec la blockchain, et nous analyserons son exactitude et les garanties de sécurité qu'il promet [...]
{{% /callout %}}
