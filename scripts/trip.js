const driver_name = "Samuel Penney"; // Variables 
const distance_miles = 420;
const mpg = 28;
const gas_price = 3.59;
const fuel_capacity = 12;
const is_round_trip = true;

let total_distance;

if (is_round_trip) {
  total_distance = distance_miles * 2;
} else {
  total_distance = distance_miles;
}

console.log("trip.js loaded");
console.log("Total distance:", total_distance);

function calculateGallonsNeeded(totalDistance, milesPerGallon) { // Funtions
  return totalDistance / milesPerGallon;
}

function calculateFuelCost(gallons, pricePerGallon) {
  return gallons * pricePerGallon;
}

const gallons_needed = calculateGallonsNeeded(total_distance, mpg);
const total_fuel_cost = calculateFuelCost(gallons_needed, gas_price);
const miles_per_tank = fuel_capacity * mpg;

let stop_number = 1;
let miles_traveled = miles_per_tank;

while (miles_traveled < distance_miles) { // While loop that use functions
  const gallons_used_so_far = calculateGallonsNeeded(miles_traveled, mpg);
  const running_cost = calculateFuelCost(gallons_used_so_far, gas_price);

  console.log(
    `Stop ${stop_number}: ${miles_traveled} miles traveled, estimated gas spent $${running_cost.toFixed(2)}`,
  );

  stop_number += 1;
  miles_traveled += miles_per_tank;
}

console.log(`Driver: ${driver_name}`); // Main output
console.log(`Total distance: ${total_distance} miles`);
console.log(`Estimated gallons needed: ${gallons_needed.toFixed(2)}`);
console.log(`Estimated total cost: $${total_fuel_cost.toFixed(2)}`);
