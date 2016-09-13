import React from 'react';
import {Link} from 'react-router';

var Layout = React.createClass({
  render: function () {
    return (
      <div className="app-container">
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">

            <a className="navbar-brand" href="#">Mars Pics</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Rovers</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
        <div className="page-container">
          {this.props.children}
        </div>
      </div>

    )

  }
})

module.exports = Layout;


