import React from 'react';
import CommentsListBox from './CommentsListBox';
class WeatherBox extends React.Component {
    constructor(props) {
        super(props);
        //bind functions
        this.handleSubmit = this.handleSubmit.bind(this);
        //declare state
        this.state = {
            city: []
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        axios
            .get(`http://api.apixu.com/v1/current.json?key=5f1979d6812b411491d164417171806&q=${this.state.city}`)
            .then(resp => {
                this
                    .props
                    .onSubmitSearchForm(resp.data);
                this.setState({city: ''});
            });
    }
  render() {
    return (
      <div className="col-md-3 weatherItem">
        
        <div className="media">
          <span className="glyphicon glyphicon-trash pull-right" onClick={() => {this.props.removeWeatherBox(this.props.item)}}></span>
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