import React from 'react';
import CommentsListBox from './CommentsListBox';
const axios = require('axios');

class WeatherBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: this.props.item,
      comments:[],
      ajaxData:[]
    }
  }

 componentWillMount() {
    axios
      .get(`http://api.apixu.com/v1/current.json?key=5f1979d6812b411491d164417171806&q=${this.props.item}&rand=2`)
      .then(resp => {
        var stracture = {
          name: resp.data.location.name,
          icon: resp.data.current.condition.icon,
          feelslike_c: resp.data.current.feelslike_c,
          text: resp.data.current.condition.text,
          comments: []
        };

        this.setState(prevState => ({
          ajaxData: prevState.ajaxData = stracture
        }));
      })
      .catch(function (error) {
        console.log('Not found');
      });
  }
  render() {
    const itemData = this.state.ajaxData;
    return (
       <div className="equalHMV eq">
        <div className="media">
          <span
            className="glyphicon glyphicon-trash pull-right"
            onClick={() => {
            this
              .props
              .removeWeatherBox(this.props.item)
          }}></span>
          <div className="media-left">
            <img
              src={itemData.icon}
              alt={itemData.name}
              className="media-object"
              style={{
              width: 60
            }}/></div>
          <div className="media-body">
            <h4 className="media-heading">{itemData.name}</h4>
            <p>{itemData.text}
              - {itemData.feelslike_c}
              &nbsp;| C</p>
          </div>
        </div>
        <CommentsListBox comments={this.state.comments}/>
        <hr/>
      </div>
    )
  }
}

export default WeatherBox;