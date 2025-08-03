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
  - title: Senior DevSecOps & Ingénieur Intégrateur
    company: Sopht
    company_url: 'https://sopht.com/'
    company_logo: sopht
    location: Lyon (Hybride)
    date_start: '2024-11-04'
    date_end: ''
    description: |2-
        Onboarding des nouveaux clients de plusieurs mois à quelques semaines. Authentification des applications Streamlit via Keycloak, MàJ Infra/Kubernetes/Keycloak. PoC ElasticSearch Serverless. Roadmap Scaleway vers AWS. Mise en conformité pour la certification ISO 27001

  - title: DataOps
    company: OVHcloud
    company_url: 'https://www.ovhcloud.com/'
    company_logo: ovhcloud
    location: Lyon (Full Remote)
    date_start: '2019-07-01'
    date_end: '2024-07-22'
    description: |2-
        Migration Datalake Hortonworks Bare-Metal vers OpenStack (Public Cloud) et des agents de réplication de Mesos Marathon vers Kubernetes, Industrialisation, ITIL, "Shift Left Security"
        
        Orateur aux conférences:
        * DevoxxFR/SophiaConf/Mix-IT/CloudSud/SnowCamp/TouraineTech 22
        * RivieraDev/CloudNord/CloudEst 2021
        * JUG SummerCamp 2020/2021
        
  - title: Consultant DevOps
    company: AMADEUS / Altran
    company_url: 'https://www.amadeus.com/'
    company_logo: amadeus
    location: Nice (Sophia-Antipolis, sur site)
    date_start: '2017-05-01'
    date_end: '2019-06-30'
    description: Déploiement multi-cloud BigData (MapR) avec du CI/CD ainsi Terraform/Vault, suivant 12 factors & les principees ITIL. Migration MapR 3 à 5, Puppet vers Ansible. Conformité PCI-DSS 

  - title: Doctorant Calcul privé, vérifiable pour système décentralisé
    company: INSA de Lyon (L.I.R.I.S. CNRS)
    company_url: 'https://liris.cnrs.fr/'
    company_logo: liris
    location: Lyon (La Doua, sur site)
    date_start: '2014-09-01'
    date_end: '2017-04-30'
    description: |2-
        Analyse de sentiments en temps réel de 1,78 milliard de tweets (48h) pendant les débats Trump-Clinton, infra multi-cloud avec de l'autoscaling (Vert.X/Kubernetes/AWS/GCP/Azure)

        6è/7ème École d'hiver, Cryptography on the Cloud/Differential Privacy, BIU Tel Aviv/Israel

design:
  columns: '2'
---
