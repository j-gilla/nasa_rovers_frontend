import React from 'react';
import {Link} from 'react-router';

var Layout = React.createClass({
  render: function () {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">

            <a className="navbar-brand" href="#">Project name</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

    )

  }
})

module.exports = Layout;


