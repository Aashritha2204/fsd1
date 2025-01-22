function greet(name, callback) {
    
    const message = `Hello, ${name}!`;
    
    
    return callback(message);
  }
  
  
  function displayMessage(message) {
    return message;
  }
  
  
  const greeting = greet("Alice", displayMessage);
  console.log(greeting); 
  