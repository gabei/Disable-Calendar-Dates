
// add CSS classes to wordpress to disable these buttons, or add them in cod ehere
// preferably the former

let calendarDates = document.querySelectorAll('.flatpickr-day ');

calendarDates.forEach((day) => { 
  let date = new Date(day.getAttribute("aria-label"));
  if(date.getUTCDay() === 0 ){
    console.log(date);
  }
};