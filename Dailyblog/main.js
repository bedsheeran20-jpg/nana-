// Get today's date
var today = new Date();

// Format the date
var options = { year: "numeric", month: "long", day: "numeric" };
var formattedDate = today.toLocaleDateString("en-US", options);

// Put the date into the page
document.getElementById("today-date").textContent = formattedDate;
