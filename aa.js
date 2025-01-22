function greet(name, callback) {
    // Create a greeting message
    const message = `Hello, ${name}!`;
    
    // Call the callback function with the message
    return callback(message);
  }
  
  // Example of a callback function that just returns the message
  function displayMessage(message) {
    return message;
  }
  
  // Example usage:
  const greeting = greet("Alice", displayMessage);
  console.log(greeting); // Output: Hello, Alice!
  