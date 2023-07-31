var bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var usernameInput = document.getElementById("usernameInput");
        var cuisineInput = document.getElementById("cuisineInput");
        var bookingTimeInput = document.getElementById("bookingTimeInput");
        if (usernameInput && cuisineInput && bookingTimeInput) {
            var username = usernameInput.value;
            var cuisine = cuisineInput.value;
            var bookingTime = bookingTimeInput.value;
            // Perform booking logic here
            // Display thank you message
            alert("Thank You for Booking!\nDear ".concat(username, ", your table has been booked for ").concat(cuisine, " cuisine at ").concat(bookingTime, ".\nWe look forward to serving you."));
            // Reset the form
            bookingForm.reset();
        }
    });
}
