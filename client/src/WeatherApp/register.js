import React from 'react';
import axios from 'axios';


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.register = this.register.bind(this);
        this.state = {
            name: "",
            email: "",
            password: ""
        }
    }
    register() {
        let obj = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        };
        // this.setState({name: ''};
        // this.setState({email: ''});
    // this.setState({password: ''});
    axios.post('auth/register', obj)
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
        });
    console.log(obj);
    }
    render() {
    return (
        <div>
            <form action="#" onSubmit={this.register}>
                <div className="form-group">
                        <label>name</label>
                        <input type="text" placeholder="Enter name"
                            value={this.state.name} className="form-control" 
                            onChange={(event) => this.setState({ name: event.target.value })} required/>
        </div>
            <div className="form-group">
        <label>Email address</label>
                        <input type="email" placeholder="Enter email"
            value={this.state.email} className="form-control"  
                             onChange={(event) => this.setState({ email: event.target.value })} required/>
        </div>
            <div className="form-group">
        <label>password address</label>
                        <input type="password" placeholder="Enter password"
            value={this.state.password} className="form-control"  
                             onChange={(event) => this.setState({ password: event.target.value })} required/>
                    </div > 
                             <button type="submit" className="btn btn-primary">Add Comment</button>
                </form> 
                    </div>
                )
    }
}
export default Register;