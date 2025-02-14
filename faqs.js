// Get all FAQ buttons
const faqButtons = document.querySelectorAll('.faq-btn');

// Add event listeners to each FAQ button
faqButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Toggle the corresponding FAQ content
        const content = button.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});
