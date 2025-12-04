
function validateForm(event) {
    const form = event.target;

    // Native HTML5 validation
    if (!form.checkValidity()) {
        form.reportValidity(); // shows browser's default tooltip
        return false;
    }

    // If everything is valid, you can proceed to submit (AJAX or regular)
    alert("Form submitted successfully!");
    return true;
}
