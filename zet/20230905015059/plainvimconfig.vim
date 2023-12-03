
" coyote0x90
set expandtab
set tabstop=2
set shiftwidth=2
set number
set relativenumber
set noerrorbells
set nocompatible              " be iMproved, required
filetype off                  " required

set path=.,,**
set mouse=a

" there's a lot of warnings about these characters if the terminal variable is not configured properly
"set list listchars=tab:▸\ ,eol:¬,trail:·
set list

set number
set relativenumber
set noerrorbells
set nowrap

" exit insert mode with jk
imap jk <Esc>

" split windows
nmap <Space>g :vert split<Enter>

" trying out v and s for split keys
"nmap <Space>v :split<Enter>
nmap <Space>s :split<Enter>

nmap <Space>f :Files<Enter>

" paste tmux buffer
nmap <Space>p :r! tmux saveb -<Enter>

" copy to tmux buffer
vmap <Space>c :w! /tmp/tmuxbuf <Enter>:r! tmux loadb /tmp/tmuxbuf<Enter>

" abbreviations
abbr _sh #!/bin/bash
abbr _awk #!/usr/bin/awk -f
abbr _dn /dev/null

" cool feature for sorting lines
" visual move to top and bottom
vmap <Up> :m0<Enter>
vmap <Down> :m$<Enter>
vmap <Left> :m'{<Enter>
vmap <Right> :m'}-1<Enter>

" useful visual mode quoting
vmap " di""<Esc>P
vmap ` di``<Esc>P

" space q to quit
nmap <Space>q :q<Enter>

" space w to write
nmap <Space>w :w<Enter>

" enable syntax highlighting
syntax on
