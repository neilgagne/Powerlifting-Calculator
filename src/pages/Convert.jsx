import React, { Component } from "react";

// Material
import { Box, Grid } from "@material-ui/core";

// Components
import Stepper from "../components/Stepper";
import SelectBox from "../components/SelectBox";
import ResultDisplay from "../components/ResultDisplay";

// Models
import { Conversions } from "../models/Conversions.js";

class Convert extends Component {
  // Used to update page title and close the app menu
  componentDidMount() {
    this.props.onPageLoad(this.props.path);
    this.props.closeMenu();
  }

  // Used to calculate the converted weight
  getConvertedWeight = (weight, conversion) => {
    let convertedValue = conversion.calculate(weight);
    return convertedValue;
  };

  // Used to format the ResultDisplay text
  getResultText() {
    if (
      this.state.conversion.value === this.conversions.PoundsToKilograms.value
    ) {
      return this.state.convertedWeight + " kilograms";
    } else if (
      this.state.conversion.value === this.conversions.KilogramsToPounds.value
    ) {
      return this.state.convertedWeight + " pounds";
    }
  }

  conversions = new Conversions();
  initConversion = this.conversions.PoundsToKilograms;

  initWeight = 135;

  initConvertedWeight = this.getConvertedWeight(
    this.initWeight,
    this.initConversion
  );

  state = {
    conversions: this.conversions,
    conversion: this.initConversion,
    weight: this.initWeight,
    convertedWeight: this.initConvertedWeight,
  };

  // OnChange of the Conversion input
  onConversionChanged = (conversion) => {
    if (conversion === this.conversions.PoundsToKilograms.value) {
      this.setState({ conversion: this.conversions.PoundsToKilograms }, () => {
        this.updateConvertedWeight();
      });
    } else if (conversion === this.conversions.KilogramsToPounds.value) {
      this.setState({ conversion: this.conversions.KilogramsToPounds }, () => {
        this.updateConvertedWeight();
      });
    }
  };

  // OnChange of the Weight input
  onWeightChanged = (weight) => {
    this.setState({ weight });
    this.updateConvertedWeight();
  };

  // Used to retrieve and update the converted weight
  updateConvertedWeight = () => {
    let convertedWeight = this.getConvertedWeight(
      this.state.weight,
      this.state.conversion
    );
    this.setState({ convertedWeight });
  };

  render() {
    return (
      <Box p={1}>
        <Grid container>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <SelectBox
                  name="conversion"
                  labelId="conversion-label"
                  labelText="Conversion"
                  inputId="conversion-input"
                  items={[
                    this.state.conversions.PoundsToKilograms,
                    this.state.conversions.KilogramsToPounds,
                  ]}
                  value={this.state.conversion.value}
                  onChange={this.onConversionChanged}
                />
              </Grid>
              <Grid item xs={12}>
                <Stepper
                  name="weight"
                  labelId="weight-label"
                  labelText="Weight"
                  step={5}
                  min={45}
                  max={945}
                  value={this.state.weight}
                  onChange={this.onWeightChanged}
                />
              </Grid>
              <Grid item xs={12}>
                <ResultDisplay
                  label="Projected Weight"
                  value={this.getResultText()}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default Convert;
