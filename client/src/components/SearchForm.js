import React from 'react';
const axios = require('axios');

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
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
            <header className="row">
                <div className="col-md-12 text-center">
                    <form action="#" id="getWeatherForm" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                id="city"
                                placeholder="Enter city"
                                required
                                value={this.state.city}
                                onChange={(event) => this.setState({city: event.target.value})}/>
                            <small id="emailHelp" className="form-text text-muted">Serving wather since 1981</small>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </header>
        );
    }
}
export default SearchForm;