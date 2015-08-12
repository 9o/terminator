window.$ = require('jquery');

var exec = require('child_process').exec;
var workingDirectory = '';

function puts(error, stdout, stderr) {
  // alert(error, stdout, stderr);

  // alert(stdout);
  $('#stdout').append('<span class="accent">&gt;&gt; ' + $('input:first').val() + '</span><br>' + stdout);
  $('html, body').animate({
    scrollTop: $('#endOfPage').offset().top,
  }, 100);
  $('input:first').val('');
}

function start() {
  //get working directory
  exec('pwd', function(error, stdout, stderr) {
    var n = stdout.lastIndexOf('/');
    var result = stdout.substring(n + 1);
    $('#working-directory').append(result);
    workingDirectory = stdout;
  });

  //get active user
  exec('id -un', function(error, stdout, stderr) {
    $('#active-user').append(stdout.replace(/\s+/g, ''));
  });
}

$(document).ready(function() {
  start();

  $('form').submit(function(event) {
    var stdin = $('input:first').val();
    if (stdin.indexOf('cd') > -1) {
      alert('cd baby!');
    } else {
      var opts = {
        cwd: workingDirectory,
      };
      exec(stdin, puts);
    }

    event.preventDefault();
  });
});
