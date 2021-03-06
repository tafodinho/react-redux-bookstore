# Movie CMS

Movie CMS is an app that contains Movies. Users can add and remove movies from the list. Each movie contains information such as: Title, Category that the books belongs to, Percentage of completion, Episode that the user is watching now.

Online preview: https://josh-react-bookstore.herokuapp.com/

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for further development.

### Installing

Necessary tools to be installed: 
* [Node.js, npm](https://www.npmjs.com/get-npm)
* [React](https://www.codecademy.com/articles/react-setup-i)
* [Redux](https://redux.js.org/introduction/installation)

## Built With

* Node.js
* React-DOM
* React-Create-App
* Redux
* React-Redux
* npm 6.4.1
* Javascript (ES6)
* HTML5
* CSS3

## Run the application
### Clone the repository
`git clone git@github.com:tafodinho/react-redux-bookstore.git`
### and then just run it with 
`npm start`

### Screenshots and info about Rails are coming soon
### cheers!

## Deployment

To deploy your app in Github-pages, install gh-pages module from npm.
Run: `npm install gh-pages --save-dev` and then go to your `package.json` file,
add homepage: `"homepage": "http://yuribenjamin.github.io/my-app"` , at the start of the file , 
and 
```
"scripts": {
//...
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
}
```
Finally, run `npm run deploy` and wait for it till is throws a `Published message`

## Authors

* **[Tafang Joshua](https://github.com/tafodinho)**

## Screenshot

![screenshot](https://github.com/tafodinho/react-redux-bookstore/blob/develop/public/screenshot.png)
