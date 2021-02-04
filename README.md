# Do Your Homework Code Quiz
This is the official Do Your Homework quiz fan club quiz for the biggest fanatics of the greatest band in Austin Texas history!

![Screenshot](client/public/assets/img/code_quiz_react_ScreenShot.png)

## Langauges Used
````
HTML 
CSS/BOOTSTRAP
REACT.JS
JAVASCRIPT
NODE.JS
EXPRESS.JS
MONGODB
````

## Link
[Github Repo](https://github.com/BrennanPredmore/code_quiz_react)
[Link](https://code-quiz-react.herokuapp.com/)

## License
No License required. These are public pages. 

## Client Dependencies
````
    "bootstrap": "^4.5.3",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.1",
    "reactstrap": "^8.7.1",
    "web-vitals": "^0.2.4"
````

## Server Dependencies
````
  "dependencies": {
    "body-parser": "^1.19.0",
    "config": "^3.3.1",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "if-env": "^1.0.4",
    "mongoose": "^5.10.18"
  },
  "devDependencies": {
    "concurrently": "^5.3.0",
    "nodemon": "^2.0.6"
  }
}
````

## Available Scripts

In the project directory, you can run:
````
    "start": "if-env NODE_ENV=production && npm run start:prod || npm run start:dev",
    "start:prod": "node server.js",
    "start:dev": "concurrently  -n \"server,client\" -c \"red,green\" \"nodemon --ignore 'client/*'\" \"npm run client\"",
    "client": "cd client && npm run start",
    "clientinstall": "npm install --prefix client",
    "install": "cd client && npm install",
    "build": "cd client && npm run build",
    "heroku-postbuild": "npm run build"
````

### `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
