import React from 'react';
const CommentBox = (props) => {
  const deleteComment = () => {
    props.deleteComment(props.item);
  };
  return (
    <div class="panel panel-default">
      <div class="panel-body">Written by:{props.user}
        - {props.text}
        <span className="glyphicon glyphicon-trash pull-right" onClick={deleteComment}></span>
      </div>
    </div>
  );
};
export default CommentBox;