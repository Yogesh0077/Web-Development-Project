// Function to validate the booking form
function validateForm() {
    // Get form fields
    const tour = document.getElementById('tour').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;

    // Check if all required fields are filled
    if (tour === "" || name === "" || email === "" || phone === "" || date === "") {
        alert("Please fill in all required fields.");
        return false;
    }

    // Basic email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Basic phone number validation (US format)
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    // If everything is valid, show a confirmation message
    alert("Your booking has been successfully submitted. We will contact you soon!");
    return true;  // Submit the form
}