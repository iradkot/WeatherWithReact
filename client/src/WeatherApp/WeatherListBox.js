import React from 'react';
import WeatherBox from './WeatherBox';

const WeatherListBox = (props) => {
  const boxes = props
    .cards
    .map((item, index) => <WeatherBox
      key = {index}
      index= {index}
      item={item} 
      removeBox = {props.removeBox}/>)
  return (
    <div>
      {boxes}
    </div>
  );
};

export default WeatherListBox;