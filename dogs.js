window.onload = setup;

function setup() {
    const fetchDogButton = document.getElementById('fetchDog');
    fetchDogButton.onclick = fetchDogImage;
}

function fetchDogImage() {
    const dogImageContainer = document.getElementById('dogImageContainer');
    
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            const img = document.createElement('img');
            img.src = data.message;
            img.alt = 'Random Dog Image';
            img.style.width = '300px';
            dogImageContainer.innerHTML = ''; // Clear previous image
            dogImageContainer.appendChild(img);
        })
        .catch(error => {
            dogImageContainer.innerHTML = `<p>Error fetching dog image: ${error.message}</p>`;
        });
}
