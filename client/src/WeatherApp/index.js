import React from 'react';
import WeatherListBox from './WeatherListBox';
import SearchForm from './SearchForm';


class WeatherApp extends React.Component {
  constructor(props) {
    super(props);
    //bind this to functions
    // this.removeWeatherBox = this.removeWeatherBox.bind(this);
    this.onSubmitSearchForm = this.onSubmitSearchForm.bind(this);
    this.removeBox = this.removeBox.bind(this);
    //Declare local state
    this.state = {
      cards: []
    }
  }
  onSubmitSearchForm(string) {
    var stracture = {
      name: string.location.name,
      icon: string.current.condition.icon,
      feelslike_c: string.current.feelslike_c,
      text: string.current.condition.text,
      comments: []
    };
    this.setState(prevState => ({
      cards: prevState
        .cards
        .concat(stracture)
    }));
  }
  removeBox(index) {
    let tempstate = this.state.cards.slice();
    tempstate.splice(index,1);
    this.setState({cards:tempstate});
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <h2>Weather search and such</h2>
          <SearchForm onSubmitSearchForm={this.onSubmitSearchForm} />
        </div>
        <WeatherListBox removeBox={this.removeBox} cards={this.state.cards} />
      </div>
    );
  }
}

export default WeatherApp;