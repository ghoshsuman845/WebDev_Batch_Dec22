function submitForm() {
    // 1. get all the user input values
    let number = document.getElementById('number').value;
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let check = document.getElementById('check').checked;
    console.log(number, name, email, check);
    // check if all the inputs are filled
    if (number != null && name != null && email != null && check != false) {
        // show the alert only if all inputs are filled
         alert("Form submitted successfully!")
    } else {
        alert("All fields are required!")
    }
}