/**
 * A single conversion type
 */
export class Conversion {
  constructor(value, label, calculate) {
    this.value = value;
    this.label = label;
    this.calculate = calculate;
  }
}

/**
 * A collection of conversion types
 */
export class Conversions {
  PoundsToKilograms = new Conversion(1, "Pounds to Kilograms", function (
    weight
  ) {
    return weight / 2.205;
  });
  KilogramsToPounds = new Conversion(2, "Kilograms to Pounds", function (
    weight
  ) {
    return weight * 2.205;
  });
}
