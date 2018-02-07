# Steem Terminal Comments

Script that displays comments from a post as an updating stream in terminal.

Use by passing a dlive link, *or steemit, or busy.org link for your live stream (or post)*

A list of comments will stay updated in the terminal. Anything new posted while you have the program running will be read out loud.

## Requirements

- Node.js
- /usr/bin/say

On Ubuntu 16.04 `say` can be installed with:

    sudo apt-get install gnustep-gui-runtime

## Install

git clone https://github.com/kirkins/dlive-terminal-comments
cd dlive-terminal-comments
npm install

## Usage

Example: `node comments.js https://www.dlive.io/#/livestream/kirkins/e6a8af00-0b94-11e8-a1f6-7f5043328ad6`
