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
    // Flavor is selected
    // Cone is selected

    return isValid
}