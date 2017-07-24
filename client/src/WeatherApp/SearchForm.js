import React from 'react';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            city: []
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `http://api.apixu.com/v1/current.json?key=1bc4679d62134f6bad190504172307&q=${this.state.city}`);
        xhr.addEventListener('load', () => {
            this.props.onSubmitSearchForm(JSON.parse(xhr.responseText));
            this.setState({ city: '' });
        })
        xhr.addEventListener('error', () => {
            console.log('error');
        })
        xhr.send();
    }
    render() {
        return (
            <form action="#" id="getWeatherForm" onSubmit={this.handleSubmit} className="form-inline">
                <input type="text" id="city" autoComplete="on" placeholder="Enter city" value={this.state.city} required onChange={(event) => this.setState({ city: event.target.value })} />
                <button type="submit" className="btn-success">Search</button>
            </form>
        );
    }
}

export default SearchForm;