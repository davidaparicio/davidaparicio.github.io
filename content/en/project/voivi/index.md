---
title: Voivi
summary: Multi-cloud / A trustless, privacy-preserving recommendation system
tags:
- Multicloud
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
  name: Code (monolith)
  url: https://github.com/davidaparicio/voivi_standalone
url_code: ""
url_pdf: "papers/2016_draft_proposal_paper_en.pdf"
url_slides: "papers/2015_14th_MDPS.pdf"
url_video: ""

---

This multi-cloud project was created to put into practice SMPC (Secure Multiparty Computation) techniques, TOR (Onion Routing) network as well as privacy preservation mechanisms (Zero-trust) to test the hypotheses of the thesis. The application was used during the [2016 U.S. Presidential Debates](https://en.wikipedia.org/wiki/2016_United_States_presidential_debates) by measuring in real time, all the tweets on the Twitter platform on the topic (analysis of topics/themes and favorable or unfavorable sentiment towards one of the candidates). During the second debate, in the space of 48 hours, the service processed 1.78 billion tweets, representing more than 15GB, spread across AWS/GCP/Azure/Heroku clouds. To handle this volume with little latency, an auto-scaling mechanism was implemented. Finally, I have scripted the deployment and execution in order to facilitate the DevOps method.

Technical Stack Details:
* AWS, GCP, Azure and Heroku
* Vert.X 3.3.3, with Hazelcast 3.7.2
* Maven 3.5.1 and SLJF4j 1.7.21
* JUnit 4.12, REST-assured 3.0, Assertj 3.5.1
* JClouds 1.9.2
* Kubernetes 1.14 (May 2019) and the first tests of Ubernetes (K8s Federation)
* MongoDB 1.50.5
* Stanford NLP 3.6

{{% callout note %}}
Nowadays, reputation systems are crucial for distributed applications in which users have to be made accountable for their actions, such as e-commerce websites or voting electronic. However, existing systems often disclose the identity of the raters, which might deter honest users from posting reviews, out of fear of retaliation from the ratees. While many privacy-preserving reputation systems have been proposed, none of them was at the same time truly decentralized, trustless, and suitable for real world usage in, for example, e-commerce applications. After discussing the weaknesses and shortcoming of existing solutions, we will present our own blockchain-based trustless reputation system, and analyze its correctness and the security guarantees it promises.[...]
{{% /callout %}}
