// Script that displays comments from a steem post in terminal
//
// Use by passing dlink url
//
// Example: node comments.js https://www.dlive.io/#/livestream/kirkins/e6a8af00-0b94-11e8-a1f6-7f5043328ad6

"use strict";
const steem = require('steem');
const logUpdate = require('log-update');
const chalk = require('chalk');
const frames = ['-', '\\', '|', '/'];

let i = 0;
let users = [];

let url = process.argv.slive(2).split('/');
let permlink = url[url.length-1];
let user = url[url.length-2];
console.log(permlink);
console.log(user);
process.exit();
 
setInterval(() => {
  const frame = frames[i = ++i % frames.length];
  steem.api.getContentReplies(user, permlink, function(err, result) {
    let textToRender = "\n\n";
    result.forEach(function(comment) {
      if(user == comment.author) {
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
