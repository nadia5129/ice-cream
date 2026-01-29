document.getElementById("submit-button").onsubmit = () => {
    let isValid = true;

    // Reset all err

    // Name is not empty
    let fname = document.getElementById("fname").value.trim();
    if (!fname) {
        isValid = false;
        // Show fname-err
    }
    // Email is not empty and contains an @
    let email= document.getElementById("email").value.trim();
    if(!email || !email.includes("@")) {
        document.getElementById("email-err").style.display = "block";
         isValid = false;
       
    }
    // Flavor is selected
    let flavor = document.getElementById("flavor").value;
    if (flavor === "none") {
        document.getElementById("flavor-err").style.display = "block";
          isValid = false;
    }
    // Cone is selected

    return isValid
}