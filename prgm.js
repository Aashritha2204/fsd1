
function delayedMessage(message, delay, callback) {
   
    setTimeout(() => {
      console.log(message);  
      callback(); 
    }, delay);
  }
  
  
  function messagePrinted() {
    console.log("Message has been printed!");
  }
  
  
  delayedMessage("Hello, world!", 10000, messagePrinted);  
  