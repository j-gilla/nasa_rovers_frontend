import React from 'react';
import HomeBanner from './HomeBanner';
import RoverPreview from './RoverPreview';
import axios from 'axios';

var LandingPager = React.createClass({

  getInitialState : function () {
    return {
      loaded:false
    }
  },


  getRoverInfo: function () {
    var that = this;
      axios.get('http://localhost:4000/api/rovers/')
        .then(function (data) {
          if(data.status !== 200){
            alert('Sorry the site is down :(')
          }
          console.log(data.data);
          var rovers = data.data.rovers;
          rovers.forEach(rover => that.setState({[rover.name]: rover }));

          return that
        })
        .then(function (that) {
          that.setState({loaded: true})
        });
  },

  componentDidMount: function () {
    this.getRoverInfo();
  },



  render: function () {
    var loaded = this.state.loaded;
    console.log(this.state);


    return (
      <div>
        <HomeBanner/>
        <div className="container">
          <h1>Rovers and stuff!!</h1>
        </div>
        <div className="container">

          <div className=" col-md-3">
            Rover 1
            <RoverPreview name={loaded && this.state.Curiosity.name} total_photos={loaded && this.state.Curiosity.total_photos}/>
          </div>
          <div className="col-md-3 col-md-offset-1">
            Rover 2
            <RoverPreview name={loaded && this.state.Opportunity.name} total_photos={loaded && this.state.Opportunity.total_photos}/>
          </div>
          <div className="col-md-3 col-md-offset-1">
            Rover 3
            <RoverPreview name={loaded && this.state.Spirit.name} total_photos={loaded && this.state.Spirit.total_photos} />
          </div>
        </div>
      </div>


    )
  }
});

module.exports = LandingPager;