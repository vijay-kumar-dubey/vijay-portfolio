
const form = document.getElementById('myForm');


form.addEventListener('submit', function (event) {
    event.preventDefault(); 

    
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form)
    })
        .then(response => {
            if (response.ok) {
                
                alert("Form submitted successfully!");
                window.location.reload();  
            } else {
                alert("There was an error submitting the form.");
            }
        })
        .catch(error => {
            alert("There was an error submitting the form.");
            console.error("Error:", error);
        });
});