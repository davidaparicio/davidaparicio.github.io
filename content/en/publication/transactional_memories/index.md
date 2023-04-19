---
title: "A Study of Factors External to Software Transactional Memories that Affect their Speed-up"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- David Aparicio
- Luiz E. Buzato

# Author notes (optional)
#author_notes:
#- "Equal contribution"
#- "Equal contribution"

date: "2014-04-06T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2014-04-30T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: In *PiBic Conference*
publication_short: In *PiBic*

abstract: This project seeks a characterization of factors external to software transactional memories (STM) that may affect their performance (speed-up). The characterization can help the researchers community to settle down once and for all whether or not a particular selection of kernel parameters has a significative effect on the results reported by the benchmarks. In this project we use three benchmarks—STAMP, STMBench7, and eigenBench—to assess the behaviour of two STMs—TinySTM and SwissSTM—when external factors, de- rived from different operating system features, are switched on and off in a series of experiments. The external factors are turned on and off by changing parameters of the process manager (scheduler), memory manager, and by binding the TM implementations to different thread libraries.

# Summary. An optional shortened abstract.
summary: This project seeks a characterization of factors external to software transactional memories (STM) that may affect their performance (speed-up).

tags: []

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'papers/2014_transactional_memories.pdf'
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/mx9axbKqKW8)'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []
#- example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---