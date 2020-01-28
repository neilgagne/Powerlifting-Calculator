import React, { Component } from "react";

// Material
import { Box, Link, Typography } from "@material-ui/core";

class About extends Component {
  // Used to update page title and close the app menu
  componentDidMount() {
    this.props.onPageLoad(this.props.path);
    this.props.closeMenu();
  }
  render() {
    return (
      <Box p={1}>
        <Typography variant="body1" gutterBottom>
          This app was developed by Neil Gagne in January 2019. This is my first
          time building a React application from scratch, and using Material UI!
        </Typography>
        <Link href="https://github.com/neilgagne" variant="body2">
          <Typography variant="overline">
            Visit Neil Gagne at GitHub!
          </Typography>
        </Link>
      </Box>
    );
  }
}

export default About;
