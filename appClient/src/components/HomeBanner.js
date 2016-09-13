var React = require('react');

var HomeBanner = React.createClass({
  render: function () {
    return (
      <div>
        <div className="jumbotron home-banner">
          <div className="banner-bang pull-right">
            <h3>Life On Mars.com</h3>
            <button className="btn btn-success pull-right">Click to Start</button>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = HomeBanner;