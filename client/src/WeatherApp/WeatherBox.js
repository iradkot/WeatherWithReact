import React from 'react';

class WeatherBox extends React.Component {
    render() {
        return (
            <div id = {this.props.index} className="col-md-4" style={{textAlign: "center"}}>
                <button className="btn btn-danger pull-right">Remove</button>
               <h1 style={{display: "inline-block"}}>{this.props.item.name} </h1>
                <img src={this.props.item.icon}/>
                <h4>{this.props.item.feelslike_c}</h4>
                <h5>{this.props.item.text}</h5>
            </div> 
        );
    }
}

export default WeatherBox;