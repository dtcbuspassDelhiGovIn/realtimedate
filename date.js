window.onload = function() {
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth() + 1; // Add 1 to get the month number in the range 1-12
    var currentYear = currentDate.getFullYear();
  
    // Calculate the start month and year
    var startMonth = currentMonth - 1;
    var startYear = currentYear;
  
    if (startMonth === 0) {
      // If the start month is December, adjust to January and decrement the year
      startMonth = 12;
      startYear -= 1;
    }
  
    // Calculate the end month and year
    var endMonth = currentMonth + 3;
    var endYear = currentYear;
  
    if (endMonth > 12) {
      // If the end month exceeds December, adjust to January and increment the year
      endMonth -= 12;
      endYear += 1;
    }
  
    // Format the start and end dates as "MM/YYYY"
    var formattedStartDate = startMonth.toString().padStart(2, '0') + '/' + startYear;
    var formattedEndDate = endMonth.toString().padStart(2, '0') + '/' + endYear;
  
    // Update the HTML elements with the calculated dates
    document.getElementById('start-date').innerHTML = formattedStartDate;
    document.getElementById('end-date').innerHTML = formattedEndDate;
  };
  