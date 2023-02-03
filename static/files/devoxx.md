# Ninja de la CLI ! 😎

## $(whoami)

### INSA de Lyon/UNICAMP

### SRE OVHcloud

### Disclamer / Sharing tips

## Basic shortcut

### alias

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

### Ioannis Arapis
Nvim en tant que IDE
github.com/voltux/nvim_ide_presentation

### Picocli, a Java framework to create CLIs

### Alicia Sykes: 50 CLI Tools
https://dev.to/lissy93/cli-tools-you-cant-live-without-57f6

- 
    terminals-are-sexy by Nikolaos Kamarinakis
    awesome-shell by Caleb Xu
    awesome-cli-apps by Adam Garrett-Harris


## Bash tooling

### neofetch (MOTD)

## Python tooling

### picosnitch (BPF/network history)

### asciinema (terminal recording)

### bpytop (htop, top)

### httpie (API curl)

### glances (web log, monitor)

### vd (VisiData)

### yq (jq for yaml/xml/toml)

### thefuck (autocorrect)

### cht.sh (THE cheatsheet)

### bpytop (bashtop->X->btop)

### ranger (file explorer like vim)

### speedtest-cli

### buku (bookmark manager)

### ddgr (googler, DuckDuckGo search)

### khal (calendar)

### tuir (reddit)

### gdp-dashboard (C/C++ debugger)

### wttr.in (weather)

- curl wttr.in/Paris

## Javascript tooling

### browsh (CLI web browser)

### surge(.sh) (deploy static website) 

## Perl tooling

### diff-so-fancy (diff)

### exiftool (R/W metadata)

## Ruby tooling

### YouPlot (like VisiData)

## C/C++ tooling

### yank (pipe to clipboard)

### taskwarrior (todo list)

### pv (pipe viewer)

### lnav / multitail (log navigator)

### dfc / ncdu (ncurses du)

### jq (yaml issue #467)

### jo (create json)

### zstd (compress)

### mold (linker LLVM)

### mc (Midnight Commander / Ncurses ls)

### ag (ack=Perl)

### btop (htop, CPU/GPU/net/disk usage)

### jdupes (fdupes fork, find duplicates)

### aria2 (wget, SFTP, Torrent)

### entr (watch file changes)

### rsync (backup/sync local/remote)

### xsel (clipboard)

### cmus (music browser player)

### mutt (email client)

### newsboat (RSS ATOM reader)

### tmate (tmux sharing)

## Go tooling

### direnv (workspace helper)

### duf (du)

### coroot (monitor/troubleshoot µ-services)

### hey (HTTP benchmark)

### gRPCurl (gRPC curl)

### noti (notifications)

### fzf (fuzzy find)

### dstp (network checks)

### GoAccess (web log)

### inlets/ngrok (port tunneling)

### zed (jq)

### jid (interactive jq)

### jqp (jq playground)

### fq (bin jq)

### gjo (jo)

### restic (backup like git)

### dsq (SQL query json/csv/excel/parquet)

### lazygit (terminal UI for git)

### scc (count languages)

### ctop (htop, top)

### cointop (cryto price tracker)

- ssh cointop.sh

### micro (nano editor)

### rclone (rsync cloud storage)

### lazydocker (docker mgmt)

### lazygit (git mgmt)

### transfer.sh (file sharing)

## Rust tooling

### A modern replacement for 
<TOOL> written in Rust

### bat (cat)

### fd (find)

### fselect (find like sql)

### exa (ls)

### zoxide (cd)

### dust / dua-cli (du)

### ripgrep (grep)

### procs (ps)

### sd (sed)

### tealdeer (tldr)

### navi (dynamic tldr)

### broot / tre (tree)

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

### dog / lud (dig)

### trustfall (query almost everything)

### zenith (htop, CPU/GPU/net/disk usage)

### joshuto (ranger like, VIM file explorer)

### just (make)

### rip (rm)

### bandwhich (bandwidth)

### gping (ping)

### kdash (k8s dashboard)

