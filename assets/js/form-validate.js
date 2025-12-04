function validateForm(event) {
        const form = event.target;

        // Check form validity
        if (!form.checkValidity()) {
            form.reportValidity(); 
            return false;
        }

        // SweetAlert on successful form submission
        Swal.fire({
            icon: 'success',
            title: 'Form submitted successfully!',
            text: 'Thank you for your submission.',
            confirmButtonText: 'OK',
            timer: 3000,  // Optional: auto-close after 3 seconds
            showConfirmButton: true  // You can keep this true to require the user to click 'OK'
        }).then(() => {
            // Optionally, refresh the page after SweetAlert
            window.location.reload();
        });

        return true;
    }
