# Spelled

[Spelled](https://spelled-aa.herokuapp.com/#/) is a clone of [Grailed](https://www.grailed.com/). On the site, users can log in, create an account, and browse through several listings. Logged in users can view their user profile by clicking on their user icon, see an index of their posted listings under their profile, and create new listings through the 'SELL' page. Logged in users also have the option to both edit and delete their posted listings on the specified listing's show page. 

## Checkout the live site! https://spelled-aa.herokuapp.com/#/

## Tecnologies Used
* Ruby
* Rails
* Javascript
* React-Redux
* Heroku
* CSS
* HTML
* Webpack
* AWS

## Features

### Modals

Similar to Grailed, Spelled uses modals for both the login and signup functionality. 

```js
const ModalReducer = (state = startState, action) => {
    Object.freeze(state)
    
    switch (action.type) {
        case OPEN_MODAL:
            return {type: action.modal, data: action.data};
        case CLOSE_MODAL:
            return startState;
        default:
            return state;
    }
}
```

### Listing CRUD With Photo Upload

When logged in users can create a listing, they have the ability to upload a photo to their listing. Logged in users also have the ability to edit and delete their listings.

```js
handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({photoFile: file, photoUrl: fileReader.result})
        };
        if (file) {
            fileReader.readAsDataURL(file);
        };
}
```
### Comments

Users have the ability to view all comments on any listing. Logged in users have the ability to add and delete comments on a listing under the 'Discussion' section.

### Search & Categories

Users can use the search bar to find and filter listings by card name. Users can also search by different card categories by use of the dropdown lists in the category bar.

```js

const { listings, deleteListing, title, item } = this.props
const cat = this.cat
const filter_listings = listings.filter((listing) => {
  if (cat[title] !== 'mana') {
     return listing[cat[title]].toUpperCase() == item
  } else {
     if (item === '7+') {
        return listing[cat[title]] >= 7
     } else {
        return listing[cat[title]] == item
     }
  }
})

let cat_title
let item_title
if (cat[title] === 'mana') {
  cat_title = 'mana cost'
  item_title = 'Mana ' + item.toString();
} else {
  cat_title = cat[title]
  item_title = item[0].toUpperCase() + item.slice(1).toLowerCase()
}
```
### User Edit & Profile Page

Logged in users can view all of their listings and the number of listings that they have under their user profile page. They are also able to edit their profile through the settings tab via their user profile page.
