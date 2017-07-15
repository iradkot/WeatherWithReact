import React from 'react';
const Header = (props) => {
  const player =props.match.params.id;
  if (!player) {
    return <div>Sorry, but the player was not found</div>
  }
  return (
    <div>{player}</div>
  );
};
export default Header;


