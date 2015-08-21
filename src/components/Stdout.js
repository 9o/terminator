'use strict';

var React = require('react/addons');
var Highlight = require('react-highlight');

var Stdout = React.createClass({
  render: function() {
    return (
      <Highlight id="stdout" className='shell'>
        {this.props.stdout}
      </Highlight>
      );
  }
});

module.exports = Stdout;
