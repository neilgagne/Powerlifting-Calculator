/**
 * A single method of rounding
 */
export class RoundMethod {
  constructor(value, label, calculate) {
    this.value = value;
    this.label = label;
    this.calculate = calculate;
  }
}

/**
 * A collection of rounding methods
 */
export class RoundMethods {
  RoundUp = new RoundMethod(1, "Round Up", function (max) {
    return Math.ceil(max / 5) * 5;
  });
  RoundDown = new RoundMethod(2, "Round Down", function (max) {
    return Math.floor(max / 5) * 5;
  });
  RoundNearest = new RoundMethod(3, "Round to Nearest", function (max) {
    return Math.round(max / 5) * 5;
  });
}
