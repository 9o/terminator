'use strict';

var React = require('react/addons');

var Stdin = React.createClass({

  render: function () {
    return (
      <div id="stdin">
        <div className="arrow-right"></div>
        <form action="#">
          <input type="text" name="stdin" autoFocus={true}/>
          <input type="submit"/>
        </form>
      </div>
      );
  }
});

module.exports = Stdin;
