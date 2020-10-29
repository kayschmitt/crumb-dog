import React from 'react';
import logo from './img/crumbdog.png';
import './App.css';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faInstagram, faTiktok, faAmazon } from '@fortawesome/free-brands-svg-icons';
import { faTshirt } from '@fortawesome/free-solid-svg-icons';


import { withStyles } from '@material-ui/core/styles';



const StyledButton = withStyles({
  root: {
    background: 'rgb(251, 229, 150)',
    borderRadius: 3,
    border: '2px solid black',
    color: 'black',
    height: 48,
    fontSize: '18px',
    padding: '0 16px',
  
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

function App() {

  
  return (
    <div className="app">

<img src={logo} className="logo"/>

<div className="grid2x2">
<div className="box"><StyledButton variant="outlined" onClick={(e) => {
      e.preventDefault();
      window.location.href='https://teespring.com/stores/crumb-dog';
      }}><FontAwesomeIcon icon={faTshirt} style={{paddingRight: "10px"}}/>Merch</StyledButton></div>
  <div className="box">
    <StyledButton variant="outlined" className='button' onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.instagram.com/crumbdog_/';
      }}>
      <FontAwesomeIcon icon={faInstagram} style={{paddingRight: "10px"}}/>Instagram </StyledButton>
    </div>
  <div className="box"><StyledButton variant="outlined"onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.tiktok.com/@crumbdog_';
      }}><FontAwesomeIcon icon={faTiktok} style={{paddingRight: "10px"}}/>TikTok</StyledButton></div>
  <div className="box"><StyledButton variant="outlined"onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.amazon.com/hz/wishlist/ls/36JW64UV7MDB6?ref_=wl_share';
      }}><FontAwesomeIcon icon={faAmazon} style={{paddingRight: "10px"}}/>Wishlist</StyledButton></div>
</div>
    </div>
  );
}

export default App;
