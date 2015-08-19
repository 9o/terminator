'use strict';

var React = require('react/addons');

var StatusBar = React.createClass({

  render: function () {
    return (
      <div className="footer">
        <span id="working-directory"></span>
        <span id="active-user"></span>
      </div>
      );
  }
});

module.exports = StatusBar;
