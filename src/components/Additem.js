import React from 'react';

const AddItem = ({ addItem }) => {
  return (
    <div className="add-item">
      <div className="wrapper">
        <h1 className="title">Tracker</h1>
        <form onSubmit={addItem} action="">
          <input type="text" name="text" />
          <input type="date" name="date" />
          <button>Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
