var React = require('react');

var RoverPreview = React.createClass({
  render: function () {
    return (
      <div style={{background: 'red'}} className="rover-preview-container">
        <h2>{this.props.name}</h2>
        <p>Availiable photos: {this.props.total_photos}</p>
      </div>
    )
  }
});

module.exports = RoverPreview;