import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const fname = 'Hardik';
const lname = 'Jhalani';
let d = new Date();
let date = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();
let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();
const image1 = 'https://picsum.photos/400/300';
const image2 = 'https://picsum.photos/399/300';
const image3 = 'https://picsum.photos/401/300';
const website = 'https://hardik-jhalani.vercel.app/';

const heading = {
  height: '20vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textTransform: 'uppercase',
}

ReactDOM.render(
  <>
    <h1 style={heading}>My name is {`${fname} ${lname}`}</h1>
    <div className='pictures'>
    <img src={image1} alt = '' />
    <img src={image2} alt = '' />
    <a href={website} target={'_blank'}>
      <img src={image3} alt = '' />
    </a>
    </div>
    <div className='calender'>
    <p>Today's date: {`${date}/${month}/${year}`}</p>
    <p>Current time: {`${hours > 12 ? hours - 12 : hours}:${minutes}:${seconds} ${hours > 12 ? 'PM': 'AM'}`}</p>
    </div>
  </>,
  document.getElementById('root')
);