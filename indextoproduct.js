

document.addEventListener("DOMContentLoaded", function() {
    const displayedImage = document.getElementById("displayedImage");

    // Function to retrieve and display the image from the query parameter
    function displayImageFromQueryParameter() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const imageUrl = urlParams.get("product2.png");

        if (imageUrl) {
            displayedImage.src = imageUrl;
        }
    }

    // Call the displayImageFromQueryParameter() function when the target page loads
    displayImageFromQueryParameter();
});
