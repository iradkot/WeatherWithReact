import React from 'react';
import CommentsListBox from './CommentsListBox';
const axios = require('axios');

class WeatherBox extends React.Component {
  constructor(props) {
        super(props);
        //bind this to functions
        this.deleteBoxFnc = this.deleteBoxFnc.bind(this);
    }
    deleteBoxFnc(){
        this.props.removeWeatherBox(this.props.item);//Using a function to call function in props
    }
  render() {
    return (
       <div className="equalHMV eq">
        <div className="media">
          <span
            className="glyphicon glyphicon-trash pull-right"
            onClick={this.deleteBoxFnc}></span>
          <div className="media-left">
            <img
              src={this.props.icon}
              alt={this.props.name}
              className="media-object"
              style={{
              width: 60
            }}/></div>
          <div className="media-body">
            <h4 className="media-heading">{this.props.name}</h4>
            <p>{this.props.text}
              - {this.props.feelslike_c}
              &nbsp;| C</p>
          </div>
        </div>
        <CommentsListBox comments={this.props.comments}/>
        <hr/>
      </div>
    )
  }
}

export default WeatherBox;