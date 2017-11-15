# Sacha's ReactRedux's starter pack
### Absolutely not inspired by Stephen Grider's pretty useful [ReduxSimpleStarter](https://github.com/StephenGrider/ReduxSimpleStarter).

I created it for my next projects and it includes all the stuff I absolutely need: (Also, this is my first ReadMe.md)

    * React
    * Redux
    * React-Redux
    * React-router and react-router-dom
    * React-promise
    * Axios
    * Babel
    * Eslint (react, airbnb, flowtype)
    * Stylelint
    * Stylefmt
    * Webpack, Webpack-dev-server
    * Lodash

It is configured to be used right away.

## Getting Started

```
> git clone https://github.com/TheOmegaBlack/SachasReactReduxStarterPack.git
> cd SachasReactReduxStarterPack
> npm install
> npm start
```

And you should be ready to go!
All the files are included in /src. There are different folders for js, css and images.

## Commands

```
> npm start             // Starts webpack-dev-server
> npm run build         // Starts webpack (outputs in root/bundle.js)
> npm run eslint        // Runs eslints for src/index.js and all the js files in src/js and its sub-folders.
> npm run eslint:fix    // Runs eslint --fix (fixes some errors in your js files)
> npm run fix           // Runs both eslint:fix and stylemft
> npm run flow          // Runs flow
> npm run stylefmt      // Runs stylefmt on all the files inside src/css/ (fixes some errors in your css files)
> npm run stylelint     // Runs stylelint on all the files inside src/css/
