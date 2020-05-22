import React, { Component } from "react";

// Material UI
import { Box, Typography, IconButton } from "@material-ui/core";
import LinkedIn from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";

/**
 * About page with app information
 */
class About extends Component {
  // Used to update page title and close the app menu
  componentDidMount() {
    this.props.onPageLoad(this.props.path);
    this.props.closeMenu();
  }
  render() {
    return (
      <Box p={1}>
        <div m={2} style={{ textAlign: "center" }}>
          <Typography variant="body2" display="block" gutterBottom>
            This app was developed by Neil Gagne in January 2019 using React and
            Material UI!
          </Typography>
        </div>
        <div m={2} style={{ textAlign: "center" }}>
          <IconButton
            href="#"
            onClick={() => {
              window.location.href = "https://www.linkedin.com/in/neilgagne/";
            }}
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            href="#"
            onClick={() => {
              window.location.href = "https://github.com/neilgagne";
            }}
          >
            <GitHub />
          </IconButton>
        </div>
      </Box>
    );
  }
}

export default About;
