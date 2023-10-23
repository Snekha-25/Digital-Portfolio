    // Get references to the button and description elements
    const toggleButton = document.getElementById("toggleButton");
    const profileDescription = document.getElementById("profileDescription");

    // Initially hide the description
    profileDescription.style.display = "none";

    // Add a click event listener to the button
    toggleButton.addEventListener("click", () => {
        // Toggle the visibility of the description
        if (profileDescription.style.display === "none") {
            profileDescription.style.display = "block";
        } else {
            profileDescription.style.display = "none";
        }
    });
