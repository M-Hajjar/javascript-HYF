"use strict";
/**
 * The `possibleStates` property define the states (in this case: colours)
 * in which the traffic light can be.
 * The `stateIndex` property indicates which of the possible states is current.
 */
const trafficLight = {
  possibleStates: ["green", "orange", "red"],
  stateIndex: 0,
};

let cycle = 0;
while (cycle < 2) {
  const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
  console.log("The traffic light is on", currentState);

  // Switching logic based on the current state
  if (currentState === "green") {
    trafficLight.stateIndex = 1; // Turn it to orange
  } else if (currentState === "orange") {
    trafficLight.stateIndex = 2; // Turn it to red
  } else if (currentState === "red") {
    cycle++; // Increment cycles
    trafficLight.stateIndex = 0; // Turn it to green
  }
}

/**
 * The output should be:

The traffic light is on green
The traffic light is on orange
The traffic light is on red
The traffic light is on green
The traffic light is on orange
The traffic light is on red

*/
