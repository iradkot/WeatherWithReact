import React from 'react';
import CommentsListBox from './CommentsListBox';

class WeatherBox extends React.Component { 
  render() {
    const dataItem = this.props.item;
    return (
       <div className="equalHMV eq">
        <div className="media">
          <span className="glyphicon glyphicon-trash pull-right" onClick={()=>{this.props.removeWeatherBox(this.props.item)}}></span>
          <div className="media-left">
            <img src={dataItem.icon} alt={dataItem.name} className="media-object" style={{ width: 60}}/></div>
          <div className="media-body">
            <h4 className="media-heading">{dataItem.name}</h4>
            <p>{dataItem.text}- {dataItem.feelslike_c} &nbsp;| C</p>
          </div>
        </div>
        <CommentsListBox comments={dataItem.comments}/>
        <hr/>
      </div>
    )
  }
}

export default WeatherBox;