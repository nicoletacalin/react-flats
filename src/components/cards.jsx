import React from 'react';
import Card from './card'

const Cards = (props) => {
  // console.log("props", props.flats)
  const list = () => {
    return props.flats.map((flat, index) => {
      return(
        <Card
          flat = {flat}
          key = {flat.lat}
          selected = {flat.name === props.selectedFlat.name}
          index = {index}
          selectFlat = {props.selectFlat}
        />
      );
    });
  };
  return(
    <div className="flat-list">
      {list()}
    </div>
  );
};

export default Cards;
