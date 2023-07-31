const bookingForm = document.getElementById("bookingForm") as HTMLFormElement;

if (bookingForm) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const usernameInput = document.getElementById("usernameInput") as HTMLInputElement;
    const cuisineInput = document.getElementById("cuisineInput") as HTMLInputElement;
    const bookingTimeInput = document.getElementById("bookingTimeInput") as HTMLInputElement;

    if (usernameInput && cuisineInput && bookingTimeInput) {
      const username = usernameInput.value;
      const cuisine = cuisineInput.value;
      const bookingTime = bookingTimeInput.value;

      // Perform booking logic here

      // Display thank you message
      alert(`Thank You for Booking!\nDear ${username}, your table has been booked for ${cuisine} cuisine at ${bookingTime}.\nWe look forward to serving you.`);

      // Reset the form
      bookingForm.reset();
    }
  });
}
