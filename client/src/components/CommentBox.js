import React from 'react';
const CommentBox = (props) => {
  const deleteComment = () => {
    props.deleteComment(props.item);
  };
  return (
    <li>Written by:{props.user}
      - {props.text}
      <span onClick={deleteComment}>
        X
      </span>
    </li>
  );
};
export default CommentBox;