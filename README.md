# Laundry List App React

**App status: Not finished**

This is an upgrade to my first laundry list app which was built on vanillaJS https://github.com/TamalAnwar/ClothesWashTracker

This is going to be a similar app but with some extendend functionalities.

Clone the repo and start working with it by hitting `npm start` or `yarn start`.

## App.js

App.js is the mother component which holds everything together. There is a state called `list` which starts off as an empty array. Here I put all the todo list items.

I store the todo items in the user browser's localStorage.

`componentWillMount()` will try to get the items from localStorage. If there is no item (The user first opened the app) then it will default to an empty array []

Then we set the state to whatever we got in the items variable.

## addItem() --for adding an item

The add item function will add a new item to the state. I pass down this function to the **AddItem** component.

When someone clicks to add item, I run `e.preventDefault()` to prevent the form from reloading the page.

Then I get the input text from `e.target.text.value`. `text` is the name I set to the input field.

I also get the date, the same way. There is a chance when user will not fill out the date picker. In that case I default it to a the current date and time.

I set the `checked` value to false by default. This one is important to have checked/unchecked status.

I exit the code if the user did not fill out the text.

I put all these 3 variables in an object called `item`. Then I update the state and `reset()` the form for next use.

By this time the page gets updated with a new item in the page.

## componentDidUpdate() --storing the items into localStorage here

I also have to update the localStorage with the new list. I first tried to do it with `componentWillUpdate()` lifecycle method but it does not works. Looks like the state updates then `componentDidUpdate()` runs. I have to learn more about lifecycle methods :)

I use the `localStorage.setItem()` and JSON.stringify() it before saving the data.

## deleteItem() --for deleting an item

This is yet another method that lives in the App.js. Delete item will simply take an index number (the number of the item) then I will make a copy of the list. Then use `.splice()` array method. I start with the `index` number and splice 1 item. I tried using the `delete` command, but that makes a gap in the array. When I try to reload the page the page shows an error like, cannot get the propery .checked of null. There must be an efficiant way to delete it, which I will have to explore later.

Then I set the state. Once again, the `componentDidUpdate()` runs and I get the new list saved to the localStorage.

I pass this method down to **<Item />** component. Over there I have a div for delete. I set the `onCLick` handler and run the deleteItem() function.

I pass the index as a parameter which I have previously passed down in App.js.
