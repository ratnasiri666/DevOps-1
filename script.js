document.getElementById('countryCode').addEventListener('change', function() {
    const countryCode = this.value;  // Get selected country code
    const phoneInput = document.getElementById('phone');
    
    // Set the phone number input to include the selected country code
    phoneInput.value = countryCode;  // Automatically append country code
});

document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get selected country code and phone number
    const countryCode = document.getElementById('countryCode').value;
    const phone = document.getElementById('phone').value;

    // Ensure the phone number starts with the country code
    if (!phone.startsWith(countryCode)) {
        alert('Please enter a valid phone number with the country code.');
        return;
    }

    // Clear the form
    this.reset();

    // Show success message
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';

    // Hide the message after 3 seconds
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);
});
