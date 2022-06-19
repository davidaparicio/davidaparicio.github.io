---
title: Une liste de nouveaux outils en ligne de commande
subtitle: Quels sont vos nouveaux outils en ligne de commande préférés ?

# Summary for listings and search engines
summary: Quels sont vos nouveaux outils en ligne de commande préférés ?

# Link this post with a project
projects: []

# Date published
date: "2022-06-19T00:00:00Z"

# Date updated
lastmod: "2022-06-19T00:00:00Z"

# Is this an unpublished draft?
draft: false

# Show this page in the Featured widget?
featured: true

# Featured image
image:
  caption: 'Crédits photographiques: [**Philipp Katzenberger**](https://unsplash.com/@fantasyflip)'
  focal_point: "10mm"
  placement: 5
  preview_only: false

authors:
- David Aparicio (VF)
- Julia Evans (VO)

tags:
- CLI

categories:
- Veille Techno
- Blog
---

{{% callout note %}}

Publié originalement en anglais par [@b0rk](https://twitter.com/b0rk/) à l’adresse https://jvns.ca/blog/2022/04/12/a-list-of-new-ish--command-line-tools/.

Traduit et publié le 19 juin 2022 par [@dadideo](https://twitter.com/dadideo/).
{{% /callout %}}


>Julia Evans: Bonjour ! J'ai posé une question sur [Twitter](https://twitter.com/b0rk/status/1513903221466664962) à propos des nouveaux outils en ligne de commande, comme `ripgrep`, `fd`, `fzf`, `exa` et `bat`.
>
>J'ai reçu un tas de réponses avec des outils dont je n'avais pas entendu parler, alors j'ai pensé faire une liste ici. Beaucoup de personnes ont également indiqué la liste GitHub [modern-unix](https://github.com/ibraheemdev/modern-unix).

## Remplacements d'outils standard

* [ripgrep](https://github.com/BurntSushi/ripgrep/), [ag](https://github.com/ggreer/the_silver_searcher), [ack](https://github.com/beyondgrep/ack3) (grep)
* [exa](https://github.com/ogham/exa), [lsd](https://github.com/Peltoche/lsd) (ls)
* [mosh](https://mosh.org/) (ssh)
* [bat](https://github.com/sharkdp/bat) (cat)
* [delta](https://github.com/dandavison/delta) (pager pour git)
* [fd](https://github.com/sharkdp/fd) (find)
* [drill](https://www.nlnetlabs.nl/projects/ldns/about/), [dog](https://github.com/ogham/dog) (dig)
* [duf](https://github.com/muesli/duf) (df)
* [dust](https://github.com/bootandy/dust), [ncdu](https://dev.yorhel.nl/ncdu) (du)
* [pgcli](https://www.pgcli.com/) (psql)
* [btm](https://github.com/ClementTsang/bottom), [btop](https://github.com/aristocratos/btop), [glances](https://github.com/nicolargo/glances), [gtop](https://github.com/aksakalli/gtop), [zenith](https://github.com/bvaisvil/zenith) (top)
* [tldr](https://tldr.sh/) (type de `man` illustré avec des exemples)
* [sd](https://github.com/chmln/sd) (sed)
* [difftastic](https://github.com/Wilfred/difftastic) (diff)
* mtr (traceroute)
* [plocate](https://plocate.sesse.net/) (locate)
* xxd, [hexyl](https://github.com/sharkdp/hexyl) (hexdump)

## Nouvelles inventions

Voici quelques outils qui ne remplacent pas exactement les outils standard :

* [z](https://github.com/rupa/z), [fasd](https://github.com/clvv/fasd), [autojump](https://github.com/wting/autojump), [zoxide](https://github.com/ajeetdsouza/zoxide) (outils pour faciliter la recherche de fichiers / le changement de répertoire)
* [broot](https://github.com/Canop/broot), [nnn](https://github.com/jarun/nnn), [ranger](https://github.com/ranger/ranger) (gestionnaire de fichiers)
* [direnv](https://github.com/direnv/direnv) (charge les variables d'environnement en fonction du répertoire courant)
* [fzf](https://github.com/junegunn/fzf), [peco](https://github.com/peco/peco) (recherche fuzzy)
* [croc](https://github.com/schollz/croc) et [magic-wormhole](https://github.com/magic-wormhole/magic-wormhole) (envoyer des fichiers d'un ordinateur à un autre)
* [hyperfine](https://github.com/sharkdp/hyperfine) (analyse comparative)
* [httpie](https://httpie.io/), [curlie](https://github.com/rs/curlie), [xh](https://github.com/ducaale/xh) (pour faire des requêtes HTTP)
* [entr](https://github.com/eradman/entr) (lance des commandes arbitraires lorsque des fichiers sont modifiés)
* [asdf](https://github.com/asdf-vm/asdf) (gestionnaire de versions pour plusieurs langues)
* [tig](https://github.com/jonas/tig), [lazygit](https://github.com/jesseduffield/lazygit) (interfaces interactives pour git)
* [lazydocker](https://github.com/jesseduffield/lazydocker) (interface interactive pour docker)
* [choose](https://github.com/theryangeary/choose) (les bases de l'awk/cut)
* [ctop](https://github.com/bcicen/ctop) (top pour les conteneurs)
* [fuck](https://github.com/nvbn/thefuck) (correction automatique des erreurs de ligne de commande)
* [tmate](https://tmate.io/) (partagez votre terminal avec un ami)
* [lnav](https://github.com/tstack/lnav), [angle-grinder](https://github.com/rcoh/angle-grinder) (outils pour gérer les logs)
* [mdp](https://github.com/visit1985/mdp), [glow](https://github.com/charmbracelet/glow) (afficher du markdown dans le terminal)
* pbcopy/pbpaste (pour le presse-papiers <> stdin/stdout) ne sont peut-être pas "nouveaux" mais ont été beaucoup mentionnés. Vous pouvez [utiliser xclip](https://stackoverflow.com/questions/5130968/how-can-i-copy-the-output-of-a-command-directly-into-my-clipboard/41843618#41843618) pour faire la même chose sous Linux.

## Outils pour JSON/YAML/CSV

* [jq](https://stedolan.github.io/jq/) (un excellent outil de manipulation de JSON)
* [jc](https://github.com/kellyjonbrazil/jc) (convertit les résultats de divers outils en JSON)
* [jo](https://github.com/jpmens/jo) (crée des objets JSON)
* [yq](https://github.com/mikefarah/yq) (comme `jq`, mais pour YAML). il existe aussi un [autre yq](https://github.com/kislyuk/yq)
* [fq](https://github.com/wader/fq) (comme `jq`, mais pour les binaires)
* [htmlq](https://github.com/mgdm/htmlq) (comme `jq`, mais pour HTML)
* [fx](https://github.com/antonmedv/fx) (outil interactif json)
* [jless](https://github.com/PaulJuliusMartinez/jless) (pager json)
* [xsv](https://github.com/BurntSushi/xsv) (un outil en ligne de commande pour les fichiers csv, de burntsushi)
* [visidata](https://www.visidata.org/) ("un multi-outil interactif pour les données tabulaires")
* [miller](https://github.com/johnkerl/miller) ("comme awk/sed/cut/join/sort pour les lignes CSV/TSV/JSON/JSON")

## Grep plein de choses

* [pdfgrep](https://pdfgrep.org/) (grep pour PDF)
* [gron](https://github.com/tomnomnom/gron) (rend JSON greppable)
* [ripgrep-all](https://github.com/phiresky/ripgrep-all) (ripgrep, mais aussi PDF, zip, ebooks, etc)

# Des outils moins récents

Voici quelques outils qui ne sont pas si nouveaux, mais qui ne sont pas très connus :

* pv ("pipe viewer", vous donne une barre de progression pour un pipe)
* vidir (de [moreutils](https://joeyh.name/code/moreutils), vous permet de renommer/supprimer des fichiers par lots dans vim)
* sponge, ts, parallel (aussi de moreutils)

# Certains favoris de Julia Evans 

Mes préférés parmi ceux que j'utilise déjà sont `entr`, `ripgrep`, `git-delta`, `httpie`, `plocate` et `jq`.

J'ai envie d'essayer `direnv`, `btm`, `z`, `xsv` et `duf`, mais je pense que l'outil le plus intéressant que j'ai découvert est `vidir`.

# Ma touche spéciale

>David Aparicio: Mes outils préférés que j'utilise au quotidien sont `zoxide`, ``, `git-delta`, ``, `bat` et `jq`. Voici mes alias dans mon ~/.zprofile

```
alias cat="bat -pp"
alias catl="bat --style=grid"
alias ls="exa"
alias cd="z" #eval "$(zoxide init zsh)"
alias du="dust"
alias grep="ripgrep"
alias ps="procs"
alias find="fd" #fselect
alias sed="sd"
alias top="gotop" #"ytop"
alias catl="bat --style=grid"
alias sysup='brew update && brew upgrade; brew cleanup'
```

## Grande MindMap 

{{% callout note %}}

Merci pour votre lecture, si vous remarquez une erreur, une typo, faites une [issue](https://gitlab.com/davidaparicio/website/-/issues) ou une [MR/PR](https://gitlab.com/davidaparicio/website/-/merge_requests) sur [Gitlab](https://twitter.com/b0rk/).

Si vous souhaitez partager vos outils favoris, ou laisser un commentaire sur [Twitter](https://twitter.com/dadideo/).
{{% /callout %}}