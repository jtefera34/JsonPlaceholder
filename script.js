window.onload = setup;

function setup() {
    const fetchTodoButton = document.getElementById('fetchTodo');
    fetchTodoButton.onclick = fetchTodo;
}

function fetchTodo() {
    const todoIdInput = document.getElementById('todoId');
    const todoId = todoIdInput.value;
    const todoDetailsDiv = document.getElementById('todoDetails');

    if (todoId) {
        fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
            .then(response => response.json()
                .then(data => {
                    if (response.ok) {
                        todoDetailsDiv.innerHTML = `
                            <p><strong>Title:</strong> ${data.title}</p>
                            <p><strong>Completed:</strong> ${data.completed}</p>
                        `;
                    } else {
                        todoDetailsDiv.innerHTML = `<p>Error fetching ToDo: ${data}</p>`;
                    }
                })
            )
            .catch(error => {
                todoDetailsDiv.innerHTML = `<p>Error fetching ToDo: ${error.message}</p>`;
            });
    } else {
        todoDetailsDiv.innerHTML = `<p>Please enter a valid ToDo ID.</p>`;
    }
}
