import React, { Component } from 'react';
import Item from './Item';
import AddItem from './Additem';
import data from '../sample';

class App extends Component {
  state = {
    list: []
  };

  componentWillMount() {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    this.setState({ list: items });

    // fetch('https://jsonplaceholder.typicode.com/todos')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     let list = data.splice(0, 10);
    //     this.setState({ list });
    //   });
    // this.setState({ list: data });
  }

  componentDidUpdate() {
    localStorage.setItem('items', JSON.stringify(this.state.list));
  }

  addItem = (e) => {
    // Prevent the form from reloading the page
    e.preventDefault();
    // Setting up temporary variables

    let text = e.target.text.value;
    let date = e.target.date.value || Date.now();
    let checked = false;

    if (!text) {
      return;
    }

    // Setting up the date into an object
    let item = { text, date, checked };
    // Copying the current state of items
    let list = [...this.state.list];
    // Pushing the item to list
    list.push(item);
    // Updating the state
    this.setState({ list });
    // Resetting the form
    e.target.reset();
  };

  // Delete item
  deleteItem = (index) => {
    let list = [...this.state.list];
    list.splice(index, 1);

    this.setState({ list });
  };

  checkedItem = (index) => {
    let list = [...this.state.list];

    list[index].checked = !list[index].checked;
    this.setState({ list });
  };

  render() {
    let list = [...this.state.list];
    let newList = list.sort((a, b) => {
      if (a.date > b.date) {
        return 1;
      } else {
        return -1;
      }
    });

    return (
      <div>
        <AddItem addItem={this.addItem} />
        <div className="app-shell wrapper">
          <div className="list">
            {this.state.list.map((item, i) => (
              <Item
                key={i}
                index={i}
                item={item}
                deleteItem={this.deleteItem}
                checkedItem={this.checkedItem}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
