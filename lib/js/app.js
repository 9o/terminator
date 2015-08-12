'use strict';
const pty = require('pty.js');
window.$ = require('jquery');

const exec = require('child_process').exec;
const workingDirectory = '';

const term = pty.spawn('bash', [], {
  name: 'xterm-color',
  cols: 80,
  rows: 30,
  cwd: process.env.HOME,
  env: process.env,
});

term.on('data', function(data) {
  console.log(data);
  $('#stdout').append('<span class="accent">&gt;&gt; ' + $('input:first').val() + '</span><br>' + data);
  $('html, body').animate({
    scrollTop: $('#endOfPage').offset().top,
  }, 100);
  $('input:first').val('');
});

function start() {
  //get working directory
  exec('pwd', function(error, stdout, stderr) {
    let n = stdout.lastIndexOf('/');
    let result = stdout.substring(n + 1);
    $('#working-directory').append(result);
    workingDirectory = stdout;
  });

  //get active user
  exec('id -un', function(error, stdout, stderr) {
    $('#active-user').append(stdout.replace(/\s+/g, ''));
  });
}

$(document).ready(function() {
  // start();
  alert(process.env.HOME);

  //console.log(JSON.stringify(process.env));

  $('form').submit(function(event) {
    let stdin = $('input:first').val();
    term.write(stdin + '\r');

    event.preventDefault();
  });
});
