---
# An instance of the Experience widget.
# Documentation: https://wowchemy.com/docs/page-builder/
widget: experience

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 40

title: Expérience
subtitle:

# Date format for experience
#   Refer to https://wowchemy.com/docs/getting-started/customization/#datetime-options
date_format: Jan 2006

# Experiences.
#   Add/remove as many `experience` items below as you like.
#   Required fields are `title`, `company`, and `date_start`.
#   Leave `date_end` empty if it's your current employer.
#   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
experience:
  - title: DataOps
    company: OVHcloud
    company_url: 'https://www.ovhcloud.com/'
    company_logo: org-x
    location: Lyon
    date_start: '2019-07-01'
    date_end: ''
    description: |2-
        Datalake Hortonworks sur une Infra OpenStack (Public Cloud), Migration à partir de l'infra Legacy, ainsi que les agents de réplication depuis Mesos + Marathon vers Kubernetes, Automatisation et Industrialisation, Processus ITIL 
        
        Orateur aux conférences:
        * SnowCamp/TouraineTech 22
        * RivieraDev/CloudNord/CloudEst 2021
        * JUG SummerCamp 2020/2021
        
  - title: Consultant DevOps
    company: AMADEUS / Altran
    company_url: 'https://www.amadeus.com/'
    company_logo: org-gc
    location: Nice (Sophia-Antipolis)
    date_start: '2017-05-01'
    date_end: '2019-06-30'
    description: Déploiement BigData (MapR) sur du multi-cloud avec du CI/CD ainsi Terraform/Vault, suivant 12 factor & les principees ITIL. Migration MapR 3 à 5, de Puppet vers Ansible

  - title: Doctorant Calcul privé, vérifiable pour système décentralisé
    company: INSA de Lyon (L.I.R.I.S. CNRS)
    company_url: 'https://liris.cnrs.fr/'
    company_logo: org-x
    location: Lyon (La Doua)
    date_start: '2014-09-01'
    date_end: '2017-04-30'
    description: |2-
        Analyse de sentiments en temps réel de 1,78 milliard de tweets (48h) pendant les débats Trump-Clinton avec la mise à l'échelle automatique, infra multi-cloud (Vert.X/Kubernetes/AWS/GCP/Azure)

        6è/7ème École d'hiver, Cryptography on the Cloud/Differential Privacy, BIU Tel Aviv/Israel

design:
  columns: '2'
---
