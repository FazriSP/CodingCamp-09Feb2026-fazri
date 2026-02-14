// Greeting Name
let namePrompt = prompt("Please enter your name:");
if (namePrompt != null && namePrompt != "") {
    document.getElementById("userName").innerText = namePrompt;
}

// Form Validation
const form = document.getElementById("messageForm");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const birthdate = document.getElementById("birthdate").value;
        const gender = document.querySelector('input[name="gender"]:checked');
        const message = document.getElementById("messageText").value;

        if (name === "" || birthdate === "" || !gender || message === "") {
            alert("Please fill all fields!");
            return;
        }

        const resultBox = document.getElementById("resultBox");
        resultBox.innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Birthdate:</strong> ${birthdate}</p>
            <p><strong>Gender:</strong> ${gender.value}</p>
            <p><strong>Message:</strong> ${message}</p>
        `;
    });
}
