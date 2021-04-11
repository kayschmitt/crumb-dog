import React from "react";
import logo from "./img/crumbdog.png";
import "./App.css";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  faTiktok,
  faAmazon,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMailBulk,
  faTshirt,
} from "@fortawesome/free-solid-svg-icons";

import { withStyles } from "@material-ui/core/styles";

const SocialButton = withStyles({
  root: {
    border: "none",
    color: "white",
    fontSize: "24px",
    padding: "10px",
    cursor: "pointer",
    "&:hover": {
      //background:'rgb(251, 229, 150, 1)',
    },
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

const StyledButton = withStyles({
  root: {
    background: "#E4432C",
    borderRadius: 6,
    border: "2px solid black",
    color: "black",
    fontWeight: "bold",
    fontSize: "20px",
    padding: "14px 0",
    cursor: "pointer",
    "&:hover": {
      background: "#E4432C",
    },
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

const StyledButtonSmall = withStyles({
  root: {
    background: "#FBE596",
    borderRadius: 6,
    border: "2px solid black",
    color: "black",
    fontWeight: "bold",
    fontSize: "18px",
    cursor: "pointer",
    "&:hover": {
      background: "#FBE596",
    },
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

function App() {
  return (
    <div className="app">
      <img src={logo} className="logo" />

      <div className="grid2x2">
        <div className="box">
          <StyledButton
            variant="outlined"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://teespring.com/stores/crumb-dog";
            }}
          >
            GET OFFICIAL MERCH
          </StyledButton>

          <div className="secondaryButtons">
            <StyledButtonSmall
              variant="outlined"
              style={{ marginRight: "5px" }}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "https://petcu.be/30xbwsj";
              }}
            >
              Petcube
            </StyledButtonSmall>
            <StyledButtonSmall
              variant="outlined"
              style={{ marginLeft: "5px" }}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "https://www.amazon.com/shop/crumb.dog";
              }}
            >
              Amazon Favorites
            </StyledButtonSmall>
          </div>
        </div>
      </div>

      <div className="socialButtons">
        <div className="headerButtons">
        <SocialButton
            variant="outlined"
            className="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://www.youtube.com/channel/UCM9Lzn783X6hhCI6XjUmGkw/?sub_confirmation=1";
            }}
          >
            <FontAwesomeIcon icon={faYoutube} />
          </SocialButton>
          <SocialButton
            variant="outlined"
            className="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://www.instagram.com/crumb.dog/";
            }}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </SocialButton>

          <SocialButton
            variant="outlined"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://www.tiktok.com/@crumb.dog";
            }}
          >
            <FontAwesomeIcon icon={faTiktok} />
          </SocialButton>

          <SocialButton
            variant="outlined"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "mailto:crumbthegriff@gmail.com";
            }}
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </SocialButton>
        </div>

        <span className="addressFooter">
          Crumb Dog | P.O. Box 3769 | Kansas City, KS 66103
        </span>
      </div>
    </div>
  );
}

export default App;
