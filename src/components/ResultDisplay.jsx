import React, { Component } from "react";

// Material UI
import { Typography, Box } from "@material-ui/core";

/**
 * Used to prominently display a value to the user
 */
class ResultDisplay extends Component {
  render() {
    return (
      <Box p={1}>
        <Typography variant="overline" component="h2" color="textSecondary">
          {this.props.label}
        </Typography>
        <Typography variant="h5">{this.props.value}</Typography>
      </Box>
    );
  }
}

export default ResultDisplay;
