import React, { Component } from "react";

import { Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";

class SelectBox extends Component {
  // Used to propogate changes to state
  updateValue = e => {
    this.props.onChange(e.target.value);
  };

  render() {
    return (
      <FormControl style={{ width: "100%" }}>
        <InputLabel id={this.props.labelId}>{this.props.labelText}</InputLabel>
        <Select
          id={this.props.inputId}
          name={this.props.name}
          labelid={this.props.labelId}
          value={this.props.value}
          onChange={this.updateValue}
          width={1}
          align={"left"}
        >
          {this.props.items.map(item => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}

export default SelectBox;
