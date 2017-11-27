# TicReacToe
### A version of TicTacToe made with React and Redux. Started with my own [ReactReduxStarterPack](https://github.com/TheOmegaBlack/SachasReactReduxStarterPack).

## Getting Started

```
> git clone https://github.com/TheOmegaBlack/TicReacToe.git
> cd TicReacToe
> npm install
> npm start
> go to localhost:8080 on your browser
```

## About this game
It works in a pretty straightforward way. I didn't really add comments but it should be easy to understand what everything does.
The game restarts after 3 seconds. The CPU takes 1 second to (pretend to) think. You can change those values by simply editing the action in 'actions/main.js'.

## What's next
Add a time machine function that allows you to go back to the previous state (the state is already structured for this)
Add the number of the current game (the state already keeps the value)
Thinking about adding a counter to count the number of win, lose and draw, but it shouldn't be possible to win so...