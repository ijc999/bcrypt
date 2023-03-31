// Define a variable and assign it a string value
const myStr = "hello"; // truthy value since it's not an empty string

// Define a variable and assign it an empty string value
const emptyStr = ""; // falsy value since it's an empty string

// Define a function that takes a string parameter and checks if it's truthy or falsy
const myFunc = (str) => {
  if (!str) { // if the parameter is falsy (empty string, null, undefined, false, 0)
    console.log("its falsy"); // log "its falsy" to the console
  } else {
    console.log("its truthy"); // log "its truthy" to the console if the parameter is truthy
  }
};

// Call the myFunc function with myStr as a parameter (truthy)
myFunc(myStr); // logs "its truthy" to the console

// Call the myFunc function with emptyStr as a parameter (falsy)
myFunc(emptyStr); // logs "its falsy" to the console
