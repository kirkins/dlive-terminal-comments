// Script that displays comments from a steem post in terminal
//
// Use by passing username and permlink via terminal command
//
// Example: node comments.js kirkins frog-aquarium--2018-02-06-01-56-07

"use strict";
const steem = require('steem');
const logUpdate = require('log-update');
const chalk = require('chalk');
const frames = ['-', '\\', '|', '/'];

let i = 0;
let args = process.argv.slice(2);
let users = [];
 
setInterval(() => {
  const frame = frames[i = ++i % frames.length];
  steem.api.getContentReplies(args[0], args[1], function(err, result) {
    let textToRender = "\n\n";
    result.forEach(function(comment) {
      if(args[0] == comment.author) {
        textToRender += chalk.red(comment.author);
      } else {
        textToRender += chalk.blue(comment.author);
      }
      textToRender += ": ";
      textToRender += comment.body;
      textToRender += "\n\n";
    });
    logUpdate(
      chalk.green(`${frame} Comments ${frame} `)
      + textToRender
      + "\n"
    );
  });

}, 1000);
