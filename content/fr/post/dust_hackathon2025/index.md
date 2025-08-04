---
title: 1er prix à l'hackathon Dust/Qonto des agents IA
subtitle: Compétition pour créer le meilleur agent ou ensemble d'agents IA répondant à un cas d'utilisation spécifique ! (Sales, Support, etc.)

# Summary for listings and search engines
summary: Cas d'utilisation le plus percutant du Hackathon Dust/Qonto, le 11 Avril 2025

# Link this post with a project
projects: []

# Date published
date: "2025-04-11T23:00:00Z"

# Date updated
#lastmod: "2025-05-24T00:00:00Z"
lastmod: "2025-04-11T23:00:00Z"

# Is this an unpublished draft?
draft: false

# Show this page in the Featured widget?
featured: true

# Featured image
image:
  caption: 'Crédits photographiques: [** Team 12 **](https://github.com/dust-hackaton-team-12)'
  placement: 5
  preview_only: false

authors:
- David Aparicio

tags:
- IA
- Intelligence Artificielle
- LLM
- Smolagents
- MCP
- Model Context Protocol
- IA Agent
- Hugging Face
- Agent

categories:
- IA
- Intelligence Artificielle
- Blog
---

## Équipe

L'équipe gagnante 12 est composée : Simon Cleriot, Khaled Khebbeb, Jarek Ecke et David Aparicio.

## Pitch

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/_nifTEl5JXg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{% callout note %}}

Plus d'informations sur le [projet](/fr/project/dust_hackathon2025/) et l'[hackathon Dust](https://dusthq.substack.com/i/162575165/long-live-the-builders-ai-agents-hackathon-winners) "AI agents hackathon winners, enhance your debating skills, AI agents in Ops, marketing, customer success and more"..

{{% /callout %}}

## Demo Finale

Qui commence à la timebox: 47:33

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/jeaFGRyie2M?t=2853" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Entretien 

- Kevin Straszburger (Dust): Pouvez-vous vous présenter ?

Je m'appelle David Aparicio, je suis ingénieur logiciel diplômé de l'INSA de Lyon et de l'UNICAMP (Brésil). J'ai travaillé pour Facebook sur le projet MIT AppInventor dans le cadre de mon projet de fin d'études.
J'ai rédigé une thèse de deux ans au cours de laquelle j'ai découvert Docker, Kubernetes et DevOps. J'ai ensuite travaillé pour de grands acteurs tels qu'AMADEUS (2 ans) et OVHcloud (5 ans). Je travaille actuellement en tant que Senior DevSecOps chez Sopht, l'outil Green ITOps qui permet de réduire l'empreinte carbone de votre informatique.

- Kevin: Comment avez-vous entendu parler du hackathon ? Était-ce votre premier ?

Je n'ai pas compté mes participations à des hackathons, mais je pense que j'approche lentement la dizaine. Mon dernier prix remonte à 2014, chez Facebook São Paulo, où mon équipe a remporté une mention honorable pour un projet qui utilisait Facebook comme outil pour retrouver des personnes disparues.

- Quelles étaient vos intentions lorsque vous vous êtes inscrit ?

Tout d'abord, pour pouvoir comprendre le changement majeur que représente l'intelligence artificielle. C'est probablement une technologie aussi révolutionnaire que l'a été Internet. Et, bien sûr, pour découvrir les fonctionnalités offertes par Dust pour utiliser cette technologie. Enfin, c'est un événement vraiment exceptionnel, qui permet de rencontrer des personnes extraordinaires, au parcours hors du commun et à l'énergie contagieuse. En résumé, je ne peux me souvenir que d'un seul souvenir : les hackathons chez Facebook dans le film The Social Network !

- Comment décririez-vous votre expérience ?

Avant la présentation rapide mais approfondie d'Alban Dumouilla le matin même, je n'avais aucune idée de ce que Dust avait à offrir, étant donné qu'il n'y a pas d'offre d'essai (ce qui est compréhensible, compte tenu du coût des GPU qui font fonctionner les IA).

- Pouvez-vous décrire, avec vos propres mots, ce que vous avez créé ? (Je prévois également de partager votre démo afin que les gens puissent également accéder à votre vidéo).

Imaginez un monde où les membres non techniques d'une équipe peuvent contribuer de manière transparente à des projets de développement sans avoir à attendre que les tickets passent en sprint. Notre Dust Agent comble le fossé entre les deux équipes. Brisons les silos !

- Pourquoi avez-vous décidé de travailler sur ce projet ?

Cela vient d'une observation que nous avons faite dans toutes les entreprises où nous travaillons. Les personnes non techniciennes ne peuvent pas développer, elles ne connaissent pas nos outils (comme Cursor, Windsurf ou Roo Code), elles doivent donc créer un ticket, attendre, attendre et attendre encore que ce ticket quitte le backlog pour entrer dans un sprint et essayer de trouver une solution rapide.

Donnons-leur les moyens d'aider les développeurs en communiquant à l'IA les modifications à apporter, les bugs à résoudre, afin que l'IA se documente elle-même dans les spécifications, traite la demande et crée une pull request qui sera examinée par un développeur humain. Si le pipeline CI/CD fonctionne bien, tous les tests seront effectués et, à terme, un environnement éphémère sera disponible pour aider le développeur à valider la résolution du problème.

- Entrons dans les détails, voulez-vous ? Expliquez-nous votre journée, votre pile technologique, votre démo. Soyez aussi précis que vous le souhaitez.

Ne connaissant pas l'outil Dust, j'ai commencé par l'atelier d'introduction d'Alban Dumouilla. Après cette session stimulante, j'étais impressionné et je suis retourné voir mon équipe (dont tous les membres ne se connaissaient pas quelques heures auparavant). Entre-temps, mon équipe avait débattu des idées, et il n'en restait plus que deux. Un sujet très intéressant, mais impossible à finaliser en moins de six heures, et ce deuxième sujet prometteur, et un MVP pourrait voir le jour avant la fin de la démonstration. Un diagramme d'architecture a été rapidement élaboré, avec 4 blocs principaux. Chacun choisit son domaine de performance, afin de livrer le plus rapidement possible. En effet, même si les modèles d'IA deviennent très performants, nous devons encore intégrer les systèmes, résoudre les bugs restants et optimiser l'ensemble du projet (car l'IA néglige souvent ces phases d'optimisation des performances).

Nous avons pu commencer à intégrer le projet une heure et demie avant la date limite, en apportant les modifications nécessaires et en corrigeant les quelques bugs pour que le système soit opérationnel. Il ne restait plus que 35 minutes pour préparer la démo et, surtout, l'enregistrer. C'est alors que le stress monte soudainement : impossible d'utiliser Loom, nous avons donc rapidement créé une démo de secours à l'aide de Google Meet. Tout s'est bien passé, mais Google ne nous a jamais envoyé l'enregistrement de la réunion... Il ne reste plus que quinze minutes, nous cherchons un Mac avec un enregistrement d'écran basique et un casque performant. Mais cela prend du temps, nous devons monter la vidéo et la mettre en ligne sur Youtube avant de pouvoir espérer être sélectionnés. Le téléchargement se passe bien, mais le traitement prend beaucoup de temps. C'est comme si d'autres équipes avaient eu la même idée... il ne reste que quelques minutes... l'angoisse s'installe... Allons-nous pouvoir soumettre quelque chose ? Ou avons-nous tout fait en vain... Le lien vidéo a été envoyé, nous allons devoir modifier la vidéo le plus rapidement possible ! Ça y est, c'est fini, il est temps de profiter du hackathon, de prendre un verre et de discuter avec les autres participants... Ouf, quelle histoire ! Ah, nous avons reçu une notification, Google a enfin envoyé l'enregistrement... Trop tard, M. Sundar Pichai !

- Avec le recul, que feriez-vous différemment ? (concernant ce projet et votre journée au hackathon)

Avec le recul, je pense que nous avons été assez efficaces en moins de six heures. Je ne peux que féliciter les autres membres de l'équipe pour cette belle réussite ! Mis à part les contretemps liés à l'enregistrement de la démo, qui constituent notre principal axe d'amélioration (pour éviter tout stress inutile). L'autre point pourrait être, pour itérer rapidement, d'envisager d'utiliser des technologies telles que TinyGroups de Microsoft, N8N : un orchestrateur d'agents (avec MCP) ou Manus.im pour travailler avec une équipe de développeurs, d'architectes et de concepteurs d'IA.

- Comment cette journée a-t-elle changé votre perspective sur l'IA ?

Grâce à la facilité d'utilisation de l'outil, quelques semaines plus tard, j'ai animé un séminaire d'entreprise avec un atelier de trois heures sur l'IA. En quelques dizaines de minutes, j'avais trois cas d'utilisation professionnels pour démontrer la valeur de l'IA : un expert en documentation technique de Notion, un assistant qui répertorie les problèmes des clients à partir de Slack, et enfin, un agent qui résume ce qui s'est passé depuis notre départ du bureau (très pratique pour récupérer des informations importantes après un séminaire d'entreprise dans les Alpes françaises). Cela a permis aux employés de la start-up de trouver des idées pour la dernière heure restante. Merci Dust pour cette aide précieuse !

- Qu'est-ce qui vous enthousiasme le plus ?

Comme l'a déclaré Microsoft lors des TechDays 2011, l'informatique devient omniprésente : la technologie est partout, comme l'électricité, nous ne nous demandons plus comment fonctionne l'interrupteur, comment l'électricité est produite et acheminée jusqu'à nos foyers. L'informatique et l'IA deviennent omniprésentes, mais il y aura toujours besoin d'ingénieurs informatiques pour comprendre et entretenir ces outils, ces infrastructures et concevoir ceux de demain.
La capacité à réduire le temps et l'espace en accélérant notre productivité, en élargissant nos connaissances, en maîtrisant rapidement les nouvelles technologies, en disposant d'un assistant, d'un expert à notre disposition, et la seule limite est celle de notre imagination. J'ai hâte de découvrir cette nouvelle facette de l'informatique.  logiciels.

- Des nouvelles/liens que vous aimeriez partager ?

Je vais améliorer le projet AI Agent Hackathon de février (peut-être en ajoutant un peu de Dust.tt), plus d'informations à venir : https://www.newspresso.fr/

Mon site web est : https://david.aparicio.eu, mon profil LinkedIn : https://www.linkedin.com/in/davidaparicio1/ et enfin @dadideo.bsky.social|X|framapiaf.org

{{% callout note %}}

Merci pour votre lecture, si vous remarquez une erreur, une typo, faites une [issue](https://gitlab.com/davidaparicio/davidaparicio.gitlab.io/-/issues) ou une [MR/PR](https://gitlab.com/davidaparicio/davidaparicio.gitlab.io/-/merge_requests) sur [le fichier Gitlab](https://gitlab.com/davidaparicio/davidaparicio.gitlab.io/-/blob/master/content/fr/post/dust_hackathon2025/index.md).

Si vous souhaitez partager vos raisons improbables, ou laisser un commentaire sur [Twitter](https://x.com/dadideo/status/1912135683013070891).
{{% /callout %}}