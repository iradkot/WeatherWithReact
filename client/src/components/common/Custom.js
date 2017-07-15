import React from 'react';
const Header = (props) => {
  const {id} = props.match.params;
  if (!id) {
    return <div>Sorry, but the player was not found</div>
  }
  return (
    <div>
      <div className="page-header">
        <h1>Custom page</h1>
      </div>
      <p>{id}</p>
    </div>
  );
};
export default Header;
