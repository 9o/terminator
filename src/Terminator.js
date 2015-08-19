'use strict';

const pty = require('pty.js');
const Keymap = require('./Keymap');

class Terminator extends pty {
  initKeymap() {
    new Keymap;
    return true;
  }
};

module.exports = Terminator;
