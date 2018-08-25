import React, { Component } from 'react';
import Item from './Item';
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
    // Setting up the date into an object
    let item = { text, date };
    // Copying the current state of items
    let list = [...this.state.list];
    // Pushing the item to list
    list.push(item);
    // Updating the state
    this.setState({ list });
    console.log('Running the add item function.');
    // Resetting the form
    e.target.reset();
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

    console.table(newList);

    return (
      <div className="app-shell">
        <header id="header">
          <h1>Tracker</h1>
        </header>
        <div className="list">
          {this.state.list.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </div>
        <div className="add-item">
          <form onSubmit={this.addItem} action="">
            <input type="text" name="text" />
            <input type="date" name="date" />
            <button>Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
