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

#### Modals

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

#### Photo Upload

When logged in users create a listings, they have the ability to upload a photo to their listing. 

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

## Coming Soon

Users will be able to search by listing title in the search bar or look through listings of specified categories by way of dropdown lists in the category bar, they will also be able to view user profiles, and view comments left on listing under the 'Discussion' section. Logged in users will also be able to edit and delete their user profile through the settings tab in their user profile page, and they will be able to leave comments on posts.
