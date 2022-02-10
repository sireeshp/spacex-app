This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts
### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm run build`

Builds the app for production to the `build` folder.<br />


## About the project
### Frameworks
 * React
 * Redux with Selectors
 * AgGrid for Grid
 * Material UI

### Project Files
 * app/App.tsx 
     * Main App file
 *  app/store.ts
    *  Redux Store
 *  components
    *  Launches
       *  AgGrid Table Connected withe launchSlice Reducer for state
       *  dateFormatter to format Dates
       * cellRenderers
         * View Info Button Cell Renderer for AgGrid 

    *  RocketInfoModal
       *  Modal Displays Rocket Info
    *  TabPanel
       *  Generic TabPanel Component for Material UI
    *  BootstrapDialog
       *  Generic Dialog/ Modal Component for Material UI
 *  hooks
    *  Redux Hooks for Selector and State
 *   models
     *   Launch Modal Type Script Interface
     *   Rocket Modal  Type Script Interface
 *   reducers
     *   launchSlice for Launch Async dispatch
     *   rocketSlice  to load rocket data when user clicked and to toggle show modal
 *   api
     *   launchApi to fetch launch information
     *   rocketApi to fetch rocket information

### TODO
    *  Unit Testing 