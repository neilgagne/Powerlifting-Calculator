/**
 * A single formula for one-rep max calculation
 */
export class Formula {
  constructor(value, label, calculate) {
    this.value = value;
    this.label = label;
    this.calculate = calculate;
  }
}

/**
 * A collection of formulas for one-rep max calculation
 */
export class Formulas {
  Epley = new Formula(1, "Epley", function (weight, reps) {
    return weight * (1 + reps / 30);
  });
  Brzycki = new Formula(2, "Brzycki", function (weight, reps) {
    return weight / (37 / 36 - (1 / 36) * reps);
  });
  McGlothin = new Formula(3, "McGlothin", function (weight, reps) {
    return (weight * 100) / (101.3 - 2.67123 * reps);
  });
  Lombardi = new Formula(4, "Lombardi", function (weight, reps) {
    return weight * Math.pow(reps, 0.1);
  });
  Mayhew = new Formula(5, "Mayhew", function (weight, reps) {
    return (weight * 100) / (52.2 + 41.9 * Math.pow(Math.E, -0.055 * reps));
  });
  Oconner = new Formula(6, "O'Conner", function (weight, reps) {
    return weight * (1 + reps / 40);
  });
  Wathen = new Formula(7, "Wathen", function (weight, reps) {
    return (weight * 100) / 48.8 + 53.8 * (Math.E, -0.075 * reps);
  });
}
