document.addEventListener('DOMContentLoaded', (event) => {
    const container = document.getElementById('image-container');
    const imageSource = 'images/flower-4ms.png'; // Replace with your image path'

    // Loop 20 times
    for (let i = 0; i < 35; i++) {
        const img = document.createElement('img');
        img.src = imageSource;
        img.alt = `Repeated image number ${i + 1}`; // Add meaningful alt text
        
        // Optional: Add some basic styling or a class
        // img.style.width = '100px'; 
        // img.style.margin = '5px';
        
        container.appendChild(img);
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    const container = document.getElementById('image-container1');
    const imageSource = 'images/flower-4ms.png'; // Replace with your image path'

    // Loop 20 times
    for (let i = 0; i < 35; i++) {
        const img = document.createElement('img');
        img.src = imageSource;
        img.alt = `Repeated image number ${i + 1}`; // Add meaningful alt text
        
        // Optional: Add some basic styling or a class
        // img.style.width = '100px'; 
        // img.style.margin = '5px';
        
        container.appendChild(img);
    }
});
