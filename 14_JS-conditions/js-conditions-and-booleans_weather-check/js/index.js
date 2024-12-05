// Change this value to test different "weather" conditions.
const weather = "rainy";

// Adjust the "temperature" value to trigger different messages (for Part 2 only).
const temperature = 22;

switch (weather) {
  case "sunny":
    if (temperature > 20) {
      console.log("It's sunny. Think an your sunscreen cream!");
    } else {
      console.count("It's sunny, but a bit chilly!");
    }
    break;
  case "rainy":
    console.log("It's raining, don't forget your umbrella!");
    break;
  case "snowy":
    if (temperature > 0) {
      console.log("It's snowing, stay warm!");
    } else {
      console.log("Freezing snow!");
    }
    break;
  case "windy":
    console.log("It's windy. Your need a kite.");
    break;
  default:
    console.log("I'm not sure what the weather is like.");
}
