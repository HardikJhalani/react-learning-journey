import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name = 'Hardik Jhalani';

ReactDOM.render(
  <>
    <h1>Hello guys, my name is {name}</h1>
    <p>My lucky number is {10 + 13}</p>
  </>,
  document.getElementById('root')
);