// Script that displays comments from a steem post in terminal
//
// Use by passing username and permlink via terminal command
//
// Example: node comments.js kirkins frog-aquarium--2018-02-06-01-56-07

const steem = require('steem');
const logUpdate = require('log-update');
const frames = ['-', '\\', '|', '/'];

let i = 0;
let args = process.argv.slice(2);
 
setInterval(() => {
  const frame = frames[i = ++i % frames.length];
  steem.api.getContentReplies(args[0], args[1], function(err, result) {
    let textToRender = "\n\n";
    result.forEach(function(comment) {
      textToRender += comment.author;
      textToRender += ": ";
      textToRender += comment.body;
      textToRender += "\n";
    });
    logUpdate(
      `${frame} Comments ${frame} ` 
      + textToRender
      + "\n"
    );
  });

}, 1000);
