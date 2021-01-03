import React from 'react';
import ReactDOM from 'react-dom';
import Vote from './Vote'
// import { createStore } from "redux"
import { createStore } from './MyRedux'
import store from './store/index'

const initialState = {
  title: 'caolouyaqianyidinghenshuang',
  supNum: 0,
  oppNum: 0
}
function reducer(state = initialState, action) {
  state = JSON.parse(JSON.stringify(state));
  if (action.type === "SUPPORT") {
    state.supNum += action.payload;
  }
  else if (action.type === "OPPOSE") {
    state.oppNum += action.payload;
  }
  return state;
}

// const store = createStore(reducer);

ReactDOM.render(<>
  <Vote store={store}></Vote>
</>,
  document.getElementById('root')
);