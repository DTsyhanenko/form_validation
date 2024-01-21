// TODO: Select all elements needed
//    Use the HTML to figure out what classes/ids will work best for selecting each element
const form = document.getElementById("form")
const errors = document.querySelector(".errors")
const errorsList = document.querySelector(".errors-list")
const fields = document.querySelectorAll(".form-group")
const username = document.getElementById("username")
const password = document.getElementById("password")
const passwordConfirm = document.getElementById("password-confirmation")
const terms = document.getElementById("terms")

// TODO: Create an event listener for when the form is submitted and do the following inside of it.

document.addEventListener("submit", (e) => {
  //    TODO: Create an array to store all error messages and clear any old error messages
  const errorMessages = []
  clearErrors()

  //    TODO: Define the following validation checks with appropriate error messages
  //      1. Ensure the username is at least 6 characters long

  if (username.value.length < 6) {
    errorMessages.push("Username must contain at least 6 characters")
  }

  //      2. Ensure the password is at least 10 characters long

  if (password.value.length < 10) {
    errorMessages.push("Password must contain at least 10 characters")
  }

  //      3. Ensure the password and confirmation password match

  if (password.value !== passwordConfirm.value) {
    errorMessages.push("Password not matched")
  }

  //      4. Ensure the terms checkbox is checked

  if (!terms.checked) {
    errorMessages.push("Ensure you agreed to our terms")
  }

  //    TODO: If there are any errors then prevent the form from submitting and show the error messages
  if (errorMessages.length > 0) {
    e.preventDefault()
    showErrors(errorMessages)
  }
})

// TODO: Define this function
function clearErrors() {
  while (errorsList.hasChildNodes()) {
    errorsList.removeChild(errorsList.firstChild)
  }

  errors.classList.remove("show")
  // Loop through all the children of the error-list element and remove them
  // IMPORTANT: This cannot be done with a forEach loop or a normal for loop since as you remove children it will modify the list you are looping over which will not work
  // I recommend using a while loop to accomplish this task

  //or

  //errorsList.innerHTML = ""

  // This is the trickiest part of this exercise so if you get stuck and are unable to progress you can also set the innerHTML property of the error-list to an empty string and that will also clear the children. I recommend trying to accomplish this with a while loop, though, for practice.
  // Also, make sure you remove the show class to the errors container
}

// TODO: Define this function
function showErrors(errorMessages) {
  // Add each error to the error-list element
  for (let i = 0; i < errorMessages.length; i++) {
    // Make sure to use an li as the element for each error
    const errorListEl = document.createElement("li")
    errorListEl.textContent = errorMessages[i]
    errorsList.appendChild(errorListEl)
  }
  // Also, make sure you add the show class to the errors container
  errors.classList.add("show")
}
