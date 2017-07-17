import React from 'react';
const Header = (props) => {
  const {id} = props.match.params;
  if (!id) {
    return <div>not found</div>
  }
  return (
    <div>
      <div className="page-header">
        <h1>Custom page</h1>
      </div>
      <p>Param in browser is : {id}</p>
    </div>
  );
};
export default Header;
