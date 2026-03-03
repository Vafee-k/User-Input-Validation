// strings.js
// validating inputs and revealing the secret message

// DEBUG: confirm JS is loading
console.log("strings.js is loaded");

// grab form + inputs
const userForm = document.getElementById("userForm");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const zipInput = document.getElementById("zip");

// grab message + secret areas
const messageBox = document.getElementById("message");
const statusBox = document.getElementById("status");
const secretBox = document.getElementById("secretBox");
const secretText = document.getElementById("secretText");

// make sure form exists before attaching handler
if (userForm) {

  // handle submit (no addEventListener per assignment)
  userForm.onsubmit = function (e) {

    // DEBUG: confirm submit is firing
    console.log("Form submitted");

    // stop page refresh
    e.preventDefault();

    // reset UI
    messageBox.textContent = "";
    messageBox.classList.remove("error", "success");
    statusBox.textContent = "";
    secretBox.style.display = "none";

    // clean user input
    const first = firstNameInput.value.trim();
    const last = lastNameInput.value.trim();

    // combine into one variable (required)
    const fullName = first + " " + last;

    // grab zip
    const zip = zipInput.value.trim();

    // validate empty names
    if (first.length === 0 || last.length === 0) {
      statusBox.textContent = "FAILED";
      statusBox.style.color = "#ef4444";
      messageBox.textContent = "Both first and last name are required.";
      messageBox.classList.add("error");
      return false;
    }

    // validate full name length
    if (fullName.length > 20) {
      statusBox.textContent = "FAILED";
      statusBox.style.color = "#ef4444";
      messageBox.textContent = "Full name must be 20 characters or less.";
      messageBox.classList.add("error");
      return false;
    }

    // zip must be exactly 5 digits
    const zipRegex = /^\d{5}$/;

    if (!zipRegex.test(zip)) {
      statusBox.textContent = "FAILED";
      statusBox.style.color = "#ef4444";
      messageBox.textContent = "ZIP code must contain exactly 5 digits.";
      messageBox.classList.add("error");
      return false;
    }

    // if everything passes
    statusBox.textContent = "PASSED";
    statusBox.style.color = "#22c55e";

    messageBox.textContent = "Valid input. Secret unlocked.";
    messageBox.classList.add("success");

    secretText.textContent =
      "Welcome " + fullName + "! The secret message is: Stay disciplined.";

    secretBox.style.display = "block";

    return false;
  };

} else {
  console.log("Form not found. Check your HTML IDs.");
}