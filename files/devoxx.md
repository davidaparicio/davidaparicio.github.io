# Ninja de la CLI ! 😎

## $(whoami)

### INSA de Lyon/UNICAMP

### SRE OVHcloud

### Disclamer / Sharing tips

## Basic shortcut

### !!

- '$(history -p \!\!)'

### ESC + # (comment the line)

### cd - / z <WORD>

### open <FILE/FOLDER>

### echo $? / in the prompt

### alias Groot='sudo $(history -p \!\!)'

## Terminal++

### iTerm (MacOS)

### homebrew / arkade (cloudnative) / chocolatey (Windows/NuGet) / Nix 

### byobu/screen/tmux

### Terminator

- Konsole/etc with tmux

### zellij

### nvm (full shell script)

### vcsh (save .dotfiles)

## Choose our weapon
Powerful shell (plug)

### zsh / Oh My Zsh

### Spaceship ZSH
(minimalistic)

### Starship
(cross-shell)

### Fish / oh-my-fish

### WSL2/Cmder/Windows Terminal/Powershell

## Useful commands

### mosh (3G Roaming/Intermittent SSH)

### df -i (inodes)

### jq

- curl -s https://presidentielle2022.conseil-constitutionnel.fr/telechargement/parrainagestotal.json | jq -r -s '.[] | group_by(.Candidat)'

### Special Mac OS

- defaults write com.apple.finder CreateDesktop false && killall Finder
- caffeinate -dims -u -t $((3600*9))
- (HS) rectangle /  / xbar
- (HS) i3 wm = amethyst / yabai / xmonad
-> tinyurl.com/w969mjkk

### ⚠️ curl -s <URL> | sudo bash

### Amadeus du

- du -x --max-depth=1|sort -rn|awk -F / -v c=$COLUMNS 'NR==1{t=$1} NR>1{r=int($1/t*c+.5); b="\033[1;31m"; for (i=0; i<r; i++) b=b"#"; printf " %5.2f%% %s\033[0m %s\n", $1/t*100, b, $2}'|tac

## Extra links

### Julia Evans Zines

### Aurélie Vache 
Understanding X in a visual way / youtube

### Toujours avoir un bash >= 4.2 sous la main

### TLDR / man (tools)

### Linter: shellcheck

### https://github.com/google/zx ?!

### https://zaiste.net/posts/shell-commands-rust/

### Devoxx FR 2022
(Re) Découvrir les outils
UNIX (Grégoire Pineau)

- grep, find, xargs,
strace, tcpdump, lsof

### Devoxx FR 2021
Bash, couteau suisse du 
développeur (Laurent Callarec)

### Cocadmin

- Miner des bitcoin avec la ligne
 de commande Linux (cocadmin)
- BASH: Des scripts solides (cocadmin)
- Formations (cocadmin)

### John Hammond
How to move FAST in the Linux Terminal

### Catalins.tech
Improve your Mac Terminal

## C++ tooling

### pv (pipe viewer)

### lnav / multitail (log navigator)

### dfc / ncdu (ncurses du)

### jq (yaml issue #467)

### jo (create json)

### zstd (compress)

### mold (linker LLVM)

### mc (Midnight Commander / Ncurses ls)

### ag (ack=Perl)

## Python tooling

### httpie (API curl)

### vd (VisiData)

### yq (jq for yaml/xml/toml)

### thefuck (autocorrect)

## Go tooling

### duf (du)

### hey (HTTP benchmark)

### gRPCurl (gRPC curl)

### noti (notifications)

### fzf (fuzzy find)

### dstp (network checks)

### GoAccess (web log)

### inlets/ngrok (port tunneling)

### fq (bin jq)

### gjo (jo)

## Rust tooling

### A modern replacement for 
<TOOL> written in Rust

### bat (cat)

### fd (find)

### fselect (find like sql)

### exa (ls)

### zoxide (cd)

### dust (du)

### ripgrep (grep)

### procs (ps)

### sd (sed)

### tealdeer (tldr)

### navi (dynamic tldr)

### broot (tree)

### grex (generate regex)

### hyperfine (benchmark)

### volta (nvm)

### nu[shell] (SQL)

### lapce / ox / kiro / xi (editor)

### alacritty (openGL term)

### warp (new gen term)

### zellij (tmux layout/plugin)

### jql (jq)

### rjo (jo)

### delta (pager/git diff like bat)

### difftastic (diff)

### bottom (htop/ex-ytop/gtop/gotop)

### rg (ack)

### atuin (SQLite CTRL+R)

