'use strict';

const pty = require('pty.js');
const object = require('lodash/object');

class Terminator {
  constructor() {

  }

  example() {

  }
};

Terminator = object.merge(Terminator, pty);

module.exports = Terminator;
