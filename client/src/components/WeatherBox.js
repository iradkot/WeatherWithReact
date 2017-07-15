import React from 'react';
import CommentsListBox from './CommentsListBox';

class WeatherBox extends React.Component {
  render() {
    return (
      <div className="col-md-12 weatherItem">
        <div className="pull-right" onClick={()=>{this.props.removeWeatherBox(this.props.item)}}>X</div>
        <h2>{this.props.name}</h2>
        <h3>
          {this.props.text}
          - {this.props.feelslike_c}
          &nbsp;| C
          <img src={this.props.icon} alt={this.props.name}/></h3>
        <CommentsListBox comments={this.props.comments}/>
        <hr/>
      </div>
    )
  }
}


export default WeatherBox;