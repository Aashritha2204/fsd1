function createProfile({ name, email }) {
    return { name, email };
  }
  
  const user = { name: 'Aashritha', age: 30, email: 'aashritha@example.com', address: '2304' };
  const profile = createProfile(user);
  
  console.log(profile);
  
  