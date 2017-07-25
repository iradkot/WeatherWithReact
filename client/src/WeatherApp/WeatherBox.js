import React from 'react';
import CommentBox from './CommentBox';

class WeatherBox extends React.Component {
    constructor(props) {
        super(props);
        this.addComment = this.addComment.bind(this);
        this.removeComment = this.removeComment.bind(this);
        this.state = {
            comments: this.props.item.comments,
            comment: ""
        }
    }
    addComment() {
        let currentComment = this.state.comment;
        this.state.comments.push(currentComment);
        this.setState({ comment: '' })
    }
    removeComment(index) {
        let tempstate = this.state.comments.slice();
        tempstate.splice(index,1);
        this.setState({comments:tempstate});
    }
    render() {
        const comments = this.state.comments.map((item, index) => <CommentBox
            key={index}
            index={index}
            item={item}
            removeComment={this.removeComment} />)
        return (
            <div id={this.props.index} className="col-md-8 col-md-offset-2 weather-box" style={{ textAlign: "center" }}>
                <button className="btn btn-danger pull-right" onClick={() => this.props.removeBox(this.props.index)}>Remove</button>
                <h1 style={{ display: "inline-block" }}>{this.props.item.name} </h1>
                <img src={this.props.item.icon} />
                <h4>{this.props.item.feelslike_c}</h4>
                <h5>{this.props.item.text}</h5>
                <div className="comments-box">
                    <form action="#" onSubmit={this.addComment} className="form-inline">
                        <input type="text" id="comment" placeholder="Comment" value={this.state.comment} required onChange={(event) => this.setState({ comment: event.target.value })} />
                        <button type="submit" className="btn-success">Add Comment</button>
                    </form>
                    <div className="comments panel">
                        {comments}
                    </div>
                </div>
            </div>
        );
    }
}

export default WeatherBox;