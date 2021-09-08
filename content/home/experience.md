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
  - title: DataOps
    company: OVHcloud
    company_url: 'https://www.ovhcloud.com/'
    company_logo: org-x
    location: Lyon
    date_start: '2019-07-01'
    date_end: ''
    description: |2-
        Hortonworks datalake on OpenStack (Public Cloud), Legacy migration, ITIL Change management, Industrialization
        
        Conference speaker:
        
        * JUG SummerCamp 2020/2021
        * RivieraDev 2021
        
  - title: DevOps consultant
    company: AMADEUS / Altran
    company_url: 'https://www.amadeus.com/'
    company_logo: org-gc
    location: Nice (Sophia-Antipolis)
    date_start: '2017-05-01'
    date_end: '2019-06-30'
    description: BigData MapR deployment platform on hybrid clouds with CI/CD workflows and Terraform/Vault, following Twelve factor & ITIL principles. Migration from Puppet to Ansible, and MapR 3 to 5

  - title: PhD Fast,Verifiable,Secure compute for decentralized systems
    company: INSA de Lyon (L.I.R.I.S. CNRS)
    company_url: 'https://liris.cnrs.fr/'
    company_logo: org-x
    location: Lyon (La Doua)
    date_start: '2014-09-01'
    date_end: '2017-04-30'
    description: |2-
        Real-time Multi-cloud sentiment analysis of 1.78 Billion tweets (48h) during Trump-Clinton debates with auto-scaling (Vert.X/Kubernetes/AWS/GCP/Azure)

        6th/7th BIU Winter School, Cryptography on the Cloud/Differential Privacy, Tel Aviv/Israel

design:
  columns: '2'
---
