'use strict';
const Terminator = require('../src/Terminator.js');
const ansiHTML = require('ansi-html');
window.$ = require('jquery');

const util = require('util');
const exec = require('child_process').exec;
const workingDirectory = '';

const term = new Terminator;
alert(term);
if (typeof term.initKeymap() === 'undefined') {
  alert('darn');
}

const terminator = Terminator.spawn('bash', [], {
  name: 'xterm-color',
  cols: 80,
  rows: 30,
  cwd: process.env.HOME,
  env: process.env,
});

// console.log(util.inspect(terminator, { showHidden: true, depth: null }));

terminator.on('data', function(data) {
  $('#stdout').append(data);
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });

  $('html, body').animate({
    scrollTop: $('#endOfPage').offset().top,
  }, 100);
  $('input:first').val('');
});

function start() {
  $('#working-directory').append(process.env.HOME);
  $('#active-user').append('henry');
}

$(document).ready(function() {
  start();

  //console.log(JSON.stringify(process.env));

  $('form').submit(function(event) {
    let stdin = $('input:first').val();
    terminator.write(stdin + '\r');

    event.preventDefault();
  });
});
