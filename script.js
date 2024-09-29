let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let formData = new FormData(event.target);

    // VALIDATE NAME
    let nameErrorElement = document.getElementById("name-error");
    // ensure name is not empty
    let name = formData.get("name");
    if (name.length === 0) {
        nameErrorElement.textContent = "Name cannot be empty!";
        return;
    }
    // ensure name is between 3 and 20 characters
    if (name.length < 3 || name.length > 20) {
        nameErrorElement.textContent = "Name must be between 3 and 20 characters!";
        return;
    }

    // VALIDATE EMAIL
    let emailErrorElement = document.getElementById("email-error");
    // ensure email is not empty
    let email = formData.get("email");
    if (email.length === 0) {
        emailErrorElement.textContent = "Email cannot be empty!";
        return;
    }
    // ensure email is valid i.e. contains @ and .
    if (!email.includes("@") || !email.includes(".")) {
        emailErrorElement.textContent = "Invalid email!";
        return;
    }

    alert("Here is the validated form data " + JSON.stringify(Object.fromEntries(formData)));

});
