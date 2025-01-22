
function fetchDataWithCallback(success, callback) {
    
    setTimeout(() => {
      if (success) {
        
        const response = { data: "Here is your data from the API!" };
        callback(null, response);  
      } else {
    
        const error = "Failed to fetch data from the API.";
        callback(error, null);  
      }
    }, 2000);
  }
  
  
  function handleResponse(error, response) {
    if (error) {
      console.log("Error:", error);  
    } else {
      console.log("Success:", response);  
    }
  }
  
  console.log("Testing success scenario:");
  fetchDataWithCallback(true, handleResponse);
                   
  console.log("Testing failure scenario:");
  fetchDataWithCallback(false, handleResponse);
  