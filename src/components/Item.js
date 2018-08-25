import React from 'react';
import moment from 'moment';

const Item = ({ item }) => {
  return (
    <div className="item">
      <span className="item-name">{item.text}</span>
      <br />
      <span className="item-date">{moment(item.date).fromNow()} </span>
    </div>
  );
};

export default Item;
