const person = { 
    name: 'Aashritha', 
    address: { 
      street: 'road no 5', 
      city: 'hyderabad', 
      zip: '500074' 
    }, 
    age: 25 
  };
  
  
  
  const { address: { street, city } } = person;
  
  console.log(street);  
  console.log(city);    
  