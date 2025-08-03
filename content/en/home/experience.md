---
# An instance of the Experience widget.
# Documentation: https://wowchemy.com/docs/page-builder/
widget: experience

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 40

title: Experience
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
  - title: Senior DevSecOps and Integration Engineer
    company: Sopht
    company_url: 'https://sopht.com/'
    company_logo: sopht
    location: Lyon (Hybrid)
    date_start: '2024-11-04'
    date_end: ''
    description: |2-
        Onboard customers faster from months to weeks. Streamlit Auth., Kubernetes/Keycloak updates for ISO 27001 compliance.
        Elastic Serverless PoC. Roadmap from Scaleway to AWS

  - title: DataOps
    company: OVHcloud
    company_url: 'https://www.ovhcloud.com/'
    company_logo: ovhcloud
    location: Lyon (Full Remote)
    date_start: '2019-07-01'
    date_end: '2024-07-22'
    description: |2-
        Hortonworks datalake on OpenStack (Public Cloud), Replication agent from Mesos Marathon to Kubernetes,
        Legacy infrastructure migration, ITIL Change management, Industrialization, Shift Left Security
        
        Conference speaker:
        
        * DevoxxFR/SophiaConf/Mix-IT/CloudSud/SnowCamp/TouraineTech 22
        * RivieraDev/CloudNord/CloudEst 2021
        * JUG SummerCamp 2020/2021
        
  - title: DevOps consultant
    company: AMADEUS / Altran
    company_url: 'https://www.amadeus.com/'
    company_logo: amadeus
    location: Sophia-Antipolis (Nice, On-Site)
    date_start: '2017-05-01'
    date_end: '2019-06-30'
    description: BigData MapR on hybrid clouds with CI/CD workflows & Terraform/Vault, following Twelve factors & ITIL principles. Migration Puppet to Ansible, MapR 3 to 5, PCI-DSS compliance

  - title: PhD Fast,Verifiable,Secure compute for decentralized systems
    company: INSA de Lyon (L.I.R.I.S. CNRS)
    company_url: 'https://liris.cnrs.fr/'
    company_logo: liris
    location: Lyon (La Doua, On-Site)
    date_start: '2014-09-01'
    date_end: '2017-04-30'
    description: |2-
        Real-time Multi-cloud sentiment analysis of 1.78 Billion tweets (48h) during Trump-Clinton debates with auto-scaling (Vert.X/Kubernetes/AWS/GCP/Azure)

        6th/7th BIU Winter School, Cryptography on the Cloud/Differential Privacy, Tel Aviv/Israel

design:
  columns: '2'
---
