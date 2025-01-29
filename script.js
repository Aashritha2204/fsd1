fetch('https://jsonplaceholder.typicode.com/users')  
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();  
  })
  .then(data => {
    const tableBody = document.querySelector('#data-table tbody');
    
    data.forEach(item => {
      const row = document.createElement('tr');
      
      
      const idCell = document.createElement('td');
      idCell.textContent = item.id;
      row.appendChild(idCell);
      
      const nameCell = document.createElement('td');
      nameCell.textContent = item.name;
      row.appendChild(nameCell);
      
      const emailCell = document.createElement('td');
      emailCell.textContent = item.email;
      row.appendChild(emailCell);
      
      

      
      tableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
