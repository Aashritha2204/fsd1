async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); // Example API URL
        const data = await response.json();

        const tableBody = document.querySelector('#data-table tbody');
        data.forEach(item => {
            const row = document.createElement('tr');
            
            // Creating cells for each column (ID, Name, Email, Phone)
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>${item.phone}</td>
            `;
            
            // Append the new row to the table body
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call fetchData to fetch and display the data
fetchData();



