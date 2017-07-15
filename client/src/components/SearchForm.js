import React from 'react';
const axios = require('axios');

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
        this.onSubmitSearchForm = this.onSubmitSearchForm.bind(this);
        this.state = {
            city: []
        }
    }
    onSubmitSearchForm(string) {//-----------------------fix-----------------------------
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
            <form action="#" id="getWeatherForm" onSubmit={this.handleSubmit}>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        id="city"
                        placeholder="Enter city"
                        required
                        value={this.state.city}
                        onChange={(event) => this.setState({city: event.target.value})}/>
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="submit">Go!</button>
                    </span>
                </div>
            </form>
        );
    }
}
export default SearchForm;