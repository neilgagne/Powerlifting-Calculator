import React, { Component } from "react";

// Material UI
import { Box, Grid } from "@material-ui/core";

// Components
import Stepper from "../components/Stepper";
import SelectBox from "../components/SelectBox";
import ResultDisplay from "../components/ResultDisplay";

// Models
import { Formulas } from "../models/Formulas.js";
import { RoundMethods } from "../models/RoundMethods.js";

/**
 * Tool used to calculate projected one-rep-max with a number of reps and a given weight
 */
class Calculate extends Component {
  // Used to update page title and close the app menu
  componentDidMount() {
    this.props.onPageLoad(this.props.path);
    this.props.closeMenu();
  }

  // Used to calculate projected one-rep max
  getProjectedOneRepMax = (weight, reps, formula, roundMethod) => {
    let calculatedMax = formula.calculate(weight, reps);
    let roundedMax = roundMethod.calculate(calculatedMax);
    return roundedMax;
  };

  formulas = new Formulas();
  initFormula = this.formulas.Epley;

  roundMethods = new RoundMethods();
  initRoundMethod = this.roundMethods.RoundUp;

  initWeight = 135;
  initReps = 10;
  initProjectedMax = this.getProjectedOneRepMax(
    this.initWeight,
    this.initReps,
    this.initFormula,
    this.initRoundMethod
  );

  state = {
    formulas: this.formulas,
    roundMethods: this.roundMethods,
    formula: this.initFormula,
    roundMethod: this.initRoundMethod,
    weight: this.initWeight,
    reps: this.initReps,
    projectedMax: this.initProjectedMax,
  };

  // OnChange of the Weight input
  onWeightChanged = (weight) => {
    this.setState({ weight }, () => {
      this.updateProjectedOneRepMax();
    });
  };

  // OnChange of the Reps input
  onRepsChanged = (reps) => {
    this.setState({ reps }, () => {
      this.updateProjectedOneRepMax();
    });
  };

  // OnChange of the Formula input
  onFormulaChanged = (formulaSelected) => {
    if (formulaSelected === this.formulas.Epley.value) {
      let formula = this.formulas.Epley;
      this.setState({ formula }, () => {
        this.updateProjectedOneRepMax();
      });
    } else if (formulaSelected === this.formulas.Brzycki.value) {
      let formula = this.formulas.Brzycki;
      this.setState({ formula }, () => {
        this.updateProjectedOneRepMax();
      });
    } else if (formulaSelected === this.formulas.McGlothin.value) {
      let formula = this.formulas.McGlothin;
      this.setState({ formula }, () => {
        this.updateProjectedOneRepMax();
      });
    } else if (formulaSelected === this.formulas.Lombardi.value) {
      let formula = this.formulas.Lombardi;
      this.setState({ formula }, () => {
        this.updateProjectedOneRepMax();
      });
    } else if (formulaSelected === this.formulas.Mayhew.value) {
      let formula = this.formulas.Mayhew;
      this.setState({ formula }, () => {
        this.updateProjectedOneRepMax();
      });
    } else if (formulaSelected === this.formulas.Oconner.value) {
      let formula = this.formulas.Oconner;
      this.setState({ formula }, () => {
        this.updateProjectedOneRepMax();
      });
    } else if (formulaSelected === this.formulas.Wathen.value) {
      let formula = this.formulas.Wathen;
      this.setState({ formula }, () => {
        this.updateProjectedOneRepMax();
      });
    }
  };

  // Used to set rounding method and update projected one-rep max
  onRoundingChanged = (roundMethod) => {
    if (roundMethod === this.roundMethods.RoundUp.value) {
      this.setState({ roundMethod: this.roundMethods.RoundUp }, () => {
        this.updateProjectedOneRepMax();
      });
    } else if (roundMethod === this.roundMethods.RoundDown.value) {
      this.setState({ roundMethod: this.roundMethods.RoundDown }, () => {
        this.updateProjectedOneRepMax();
      });
    } else if (roundMethod === this.roundMethods.RoundNearest.value) {
      this.setState({ roundMethod: this.roundMethods.RoundNearest }, () => {
        this.updateProjectedOneRepMax();
      });
    }
  };

  // Used to retrieve and update project one-rep max
  updateProjectedOneRepMax = () => {
    let projectedMax = this.getProjectedOneRepMax(
      this.state.weight,
      this.state.reps,
      this.state.formula,
      this.state.roundMethod
    );
    this.setState({ projectedMax });
  };

  render() {
    return (
      <Box p={1}>
        <Grid container>
          <Grid item xs={12}>
            <Grid container spacing={3}>
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
                <Stepper
                  name="reps"
                  labelId="reps-label"
                  labelText="Reps"
                  step={1}
                  min={1}
                  max={25}
                  value={this.state.reps}
                  onChange={this.onRepsChanged}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <SelectBox
                  name="formula"
                  labelId="formula-label"
                  labelText="Formula"
                  inputId="formula-input"
                  items={[
                    this.formulas.Epley,
                    this.formulas.Brzycki,
                    this.formulas.McGlothin,
                    this.formulas.Lombardi,
                    this.formulas.Mayhew,
                    this.formulas.Oconner,
                    this.formulas.Wathen,
                  ]}
                  value={this.state.formula.value}
                  onChange={this.onFormulaChanged}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <SelectBox
                  name="rounding-method"
                  labelId="rounding-method-label"
                  labelText="Rounding Method"
                  inputId="rounding-method-input"
                  items={[
                    this.roundMethods.RoundUp,
                    this.roundMethods.RoundDown,
                    this.roundMethods.RoundNearest,
                  ]}
                  value={this.state.roundMethod.value}
                  onChange={this.onRoundingChanged}
                />
              </Grid>
              <Grid item xs={12}>
                <ResultDisplay
                  label="Projected One-Rep Max"
                  value={this.state.projectedMax}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default Calculate;
