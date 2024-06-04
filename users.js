window.onload = fetchUsers;

function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            const usersTableBody = document.querySelector('#usersTable tbody');
            data.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                    <td>${user.phone}</td>
                    <td>${user.website}</td>
                `;
                usersTableBody.appendChild(row);
            });
        })
        .catch(error => {
            const usersTableBody = document.querySelector('#usersTable tbody');
            const row = document.createElement('tr');
            row.innerHTML = `<td colspan="6">Error fetching users: ${error.message}</td>`;
            usersTableBody.appendChild(row);
        });
}
