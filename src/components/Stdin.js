'use strict';

var React = require('react/addons');
var Highlight = require('react-highlight');
var ContentEditable = require("react-contenteditable");

var Stdin = React.createClass({
  getInitialState: function(){
    return {html: ""};
  },
  handleChange: function(evt){
    this.setState({html: evt.target.value});
    // hljs.highlightBlock($('#fake-input').get(0));
  },
  copyContent: function() {
    $("#fake-input").val($("#real-input").html());
    return true;
  },
  render: function () {
    return (
      <div id="stdin">
        <div className="arrow-right"></div>
        <form action="#" onSubmit={this.copyContent}>
          <input type="text" id="real-input"></input>
          <Highlight className='shell'>
            <ContentEditable id="fake-input" html={this.state.html} onChange={this.handleChange}/>
          </Highlight>
          <input type="submit"/>
        </form>
      </div>
      );
  }
});

module.exports = Stdin;
