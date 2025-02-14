// Function to validate the contact form
function validateForm() {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic form validation
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields before submitting.");
        return false;
    }

    // Email pattern validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // If form is valid, show a success message
    alert("Thank you for contacting us! We'll get back to you shortly.");
    return true;
}
