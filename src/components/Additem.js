import React from 'react';

const AddItem = ({ addItem }) => {
  return (
    <div className="add-item">
      <div className="app-shell">
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
