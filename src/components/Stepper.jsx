import React, { Component } from "react";

// Material UI
import { Input, InputLabel, FormControl } from "@material-ui/core";

/**
 * A numeric input with two arrows to increase and decrease the value
 */
class Stepper extends Component {
  updateValue = (e) => {
    this.props.onChange(e.target.value);
  };

  render() {
    return (
      <FormControl
        style={{
          width: "100%",
        }}
      >
        <InputLabel id={this.props.labelId}>{this.props.labelText}</InputLabel>
        <Input
          id={this.props.inputId}
          name={this.props.name}
          labelid={this.props.labelId}
          margin="dense"
          value={this.props.value}
          onChange={this.updateValue}
          inputProps={{
            step: this.props.step,
            min: this.props.min,
            max: this.props.max,
            type: "number",
            "aria-labelledby": "input-slider",
          }}
        />
      </FormControl>
    );
  }
}

export default Stepper;
