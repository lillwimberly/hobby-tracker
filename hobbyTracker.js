const hobbyLog = [
  { day: "Monday", hobby: "drawing", minutes: 30, mood: "focused" },
  { day: "Tuesday", hobby: "reading", minutes: 20, mood: "relaxed" },
  { day: "Wednesday", hobby: "gaming", minutes: 45, mood: "excited" },
  { day: "Thursday", hobby: "drawing", minutes: 25, mood: "creative" },
  { day: "Friday", hobby: "reading", minutes: 35, mood: "calm" }
];

// totalTime function accepts an array and executes the built-in reduce method on every element in that array. 
// The reduce method excutes the callback function on every element - in this case using the provided 0 as the initial starting value. 
function totalTime(log) {
  return log.reduce((sum, session) => sum + session.minutes, 0); // returns the final result of the callback function 
}

// uniqueHobbies executes the built-in map method on the input 'log'. 
// Map creates a new array and populates it with the results of executing the provided callback function on each element of the calling array.
function uniqueHobbies(log) { // I would rename this function, listHobbies, uniqueHobbies is not descriptive 
  const names = log.map(entry => entry.hobby);
  return [...new Set(names)]; // here a new Set is created with the names array as its input values. 
  // Sets don't allow duplicates so it will only list the hobbies in the 'names' array once.
  // lastly the use the spread operator to remove the set values from their object format into the array one for reading.
}

// the longSessions function executes the built-in filter method on the input 'log' using the input 'minMinutes' as a conditional value to check each of the log's element against.
function longSessions(log, minMinutes) { 
  return log.filter(entry => entry.minutes > minMinutes); // returns a new array, populated with the 'log' elements which resulted in true when run with the callback function
}

// countMood takes in an array and string. 
// It then executes the filter method on the input 'log' array. It accepts a callback function which it then executes on every element of the 'log' array.
// the filter method returns a new array populated with the 'log' elements that passed this conditional test.
function countMood(log, moodType) {
  return log.filter(entry => entry.mood === moodType).length; // it checks if the value at the elements's mood property are strictly equal to the value of 'moodType'. 
  // then return the length of the returned array from the filter method. or in other words, the number of sessions at the input moodType.
}

console.log("Total time spent:", totalTime(hobbyLog), "minutes");
console.log("Unique hobbies:", uniqueHobbies(hobbyLog));
console.log("Sessions longer than 30 min:", longSessions(hobbyLog, 30));
console.log("Number of relaxed sessions:", countMood(hobbyLog, "relaxed"));
console.log('Number of calm sessions :', countMood(hobbyLog, 'calm')) // Added function call
