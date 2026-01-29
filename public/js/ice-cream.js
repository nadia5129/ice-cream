

document.getElementById("ice-cream-form").onsubmit = () => {
    let isValid = true;
 

    // Reset all err
    clearErrors();

    // Ensure Name is not empty
    let fname = document.getElementById("fname").value.trim();
    if (!fname) {
        document.getElementById("fname-err").style.display = "block";
        isValid = false;
    }
    // Ensure Email is not empty and contains an @
    let email = document.getElementById("email").value.trim();
    if (!email || !email.includes("@")) {
        document.getElementById("email-err").style.display = "block";
        isValid = false;
    }
    // Ensure Flavor is selected
    let flavor = document.getElementById("flavor").value;
    if (flavor === "none") {
        document.getElementById("flavor-err").style.display = "block";
        isValid = false;
    }
    // Ensure Cone is selected
    let waffleCone = document.getElementById("cone-waffle").checked;
    let sugarCone = document.getElementById("cone-sugar").checked;
    let cupCone = document.getElementById("cone-cup").checked;
    if (!waffleCone && !sugarCone && !cupCone) {
        document.getElementById("cone-err").style.display = "block";
        isValid = false;
    }

    return isValid;
}

// Clears all existing errors
function clearErrors() {
    let errors = document.getElementsByClassName("err")
    for (let i=0;i<errors.length;i++) {
        errors[i].style.display = "none";
    }
}
