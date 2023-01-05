/*fetch('/table-data')
  .then(response => response.json())
  .then(data => {
    // Create a new array with only the elements that have a 'status' of 'active' and a 'type' of 'user'
    const activeUserElements = data.filter(element => element.status === 'active').filter(element => element.type === 'user');
    // Get the table body element
    const tbody = document.querySelector('tbody');
    // Clear the table body
    tbody.innerHTML = '';
    // Loop through the active user elements and add them to the table
    activeUserElements.forEach(element => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
      <td>${item.notInSampleData}</td>
      <td>${item.name}</td>
      <td>${item.name}</td>
      <td>${item.notInSampleData}</td>
      <td>${item.phone}</td>
      <td>${item.notInSampleData}</td>
      <td>${item.notInSampleData}</td>
      <td>${item.notInSampleData}</td>
      <td>${item.notInSampleData}</td>
      `;
      tbody.appendChild(tr);
    });
  });*/

  