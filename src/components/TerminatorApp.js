'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var Stdout = require('./Stdout');
var Stdin = require('./Stdin');
var StatusBar = require('./StatusBar');

'use strict';
const Terminator = require('./../Terminator.js');
const ansiHTML = require('ansi-html');
window.$ = require('jquery');

const util = require('util');

const term = new Terminator;
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

var TerminatorApp = React.createClass({
  getInitialState: function() {
    return {stdout: []};
  },
  componentDidMount: function(){
    terminator.on('data', function(data) {
      // alert(data);
      // $('pre code').append(data);
      //
      var stdout = this.state.stdout;
      var newStdout = stdout.concat(data);
      this.setState({stdout: newStdout});

      $('html, body').animate({
        scrollTop: $('#endOfPage').offset().top,
      }, 100);
      $('input:first').val('');
    }.bind(this));
  },
  render: function() {
    return (
      <div className="main">
        <ReactTransitionGroup transitionName="fade">
          <Stdout stdout={this.state.stdout}></Stdout>
          <Stdin></Stdin>
          <StatusBar></StatusBar>
        </ReactTransitionGroup>
        <div id="endOfPage"></div>
      </div>
    );
  }
});
React.render(<TerminatorApp />, document.getElementById('content')); // jshint ignore:line

module.exports = TerminatorApp;
