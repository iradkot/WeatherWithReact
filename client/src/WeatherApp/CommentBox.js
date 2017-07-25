import React from 'react';

class CommentBox extends React.Component {
    render() {
        return (
            <div className="row">
                 <div className="col-md-8 col-md-offset-2 single-comment"> 
                    <p style={{ display: 'inline-block' }} id={this.props.index}> {this.props.item} </p>
                    <button className="btn btn-danger btn-xs pull-right"
                        onClick={() => this.props.removeComment(this.props.index)}> remove comment </button>
                </div>
            </div>
        )
    }
}

export default CommentBox;