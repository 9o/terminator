'use strict';

class Keymap {

  constructor() {
    this.keyBoardShortcuts();
  }

  /**
   * Bash keyboard shortcuts in the default Emacs settings.
   * This is using mousetrap, a simple library for handling keyboard shortcuts
   * which can be found here: https://github.com/ccampbell/mousetrap.
   *
   * Mousetrap is called before the body tag in static/index.html due to no
   * require support yet. See issue #244 and #283 on their repo.
   * @return {function} Add keyboard shortcuts.
   */
  keyBoardShortcuts() {

    // Disable all scenarios where Mousetrap turns off.
    Mousetrap.prototype.stopCallback = function() {
      return false;
    };

    /**
     * Window related
     */

    // New tab
    Mousetrap.bind(['ctrl+t'], function(e) {
      return false;
    });
  }
}

module.exports = Keymap;
