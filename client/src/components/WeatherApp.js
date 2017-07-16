import React from 'react';
import ReactDom from 'react-dom';
import WeatherListBox from './WeatherListBox';
import SearchForm from './SearchForm';

class WeatherApp extends React.Component {
  constructor(props) {
    super(props);

    //Bind functions
    this.onSubmitSearchForm = this.onSubmitSearchForm.bind(this);
    this.removeWeatherBox = this.removeWeatherBox.bind(this);

    this.state = {
      cards: ["tel aviv", "tokyo","belgrad", "budapest"]
    }

  }
  onSubmitSearchForm(string) {
    this.setState(prevState => ({
      cards: prevState
        .cards
        .concat(string)
    }));
  };

  removeWeatherBox(string) {
    const newState = this.state.cards;
    if (newState.indexOf(string) > -1) {
      newState.splice(newState.indexOf(string), 1);
      this.setState({cards: newState})
    }
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <h2>Weather app {Math.random() * 9}</h2>
          <SearchForm onSubmitSearchForm={this.onSubmitSearchForm}/>
        </div>
        <WeatherListBox
          cards={this.state.cards}
          removeWeatherBox={this.removeWeatherBox}/>
      </div>
    );
  }
}

export default WeatherApp;