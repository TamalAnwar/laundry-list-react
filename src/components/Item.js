import React from 'react';
import moment from 'moment';

const Item = ({ item, index, deleteItem, checkedItem }) => {
  return (
    <div className={`item ${item.checked ? 'checked' : ''} `}>
      <div className="check">
        <input
          type="checkbox"
          name="check"
          onChange={() => checkedItem(index)}
          checked={item.checked}
        />
      </div>
      <div className="text">
        <span className="item-name">{item.text}</span>
        <br />
        <span className="item-date">{moment(item.date).fromNow()} </span>
      </div>
      <div onClick={() => deleteItem(index)} className="delete">
        &times;
      </div>
    </div>
  );
};

export default Item;
