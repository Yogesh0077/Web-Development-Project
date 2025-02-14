// Tours.js

// Smooth scrolling to the booking section (if you have a booking section on the same page)
const bookButtons = document.querySelectorAll('.tour-card button');
bookButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default button behavior
        // Assuming you have a section with an id "booking-form" to scroll to
        document.querySelector('#booking-form').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Lightbox functionality for images
const images = document.querySelectorAll('.tour-card img');
images.forEach(image => {
    image.addEventListener('click', (event) => {
        const imgSrc = event.target.src;
        openLightbox(imgSrc);
    });
});

// Lightbox modal functionality
function openLightbox(src) {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span id="close-lightbox">&times;</span>
            <img src="${src}" alt="Tour Destination" />
        </div>
    `;
    document.body.appendChild(lightbox);
    
    // Close the lightbox when clicking the close button
    const closeBtn = document.getElementById('close-lightbox');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(lightbox);
    });

    // Close the lightbox if clicked outside of the image
    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            document.body.removeChild(lightbox);
        }
    });
}

// Optional: Additional JS for form validation, animation, etc.
