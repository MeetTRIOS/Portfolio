document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // You can add your own form submission logic here
        // For demonstration purposes, we'll display a success message
        successMessage.textContent = 'Message sent successfully!';
        form.reset();
    });
});
