// add CSS classes to wordpress to disable these buttons, or add them in cod ehere
// preferably the former


/* will need to add an event listener to the arrow buttons on the calendar page
   in order to run this check every time someone changes months! */
const nextMonthButtons = document.querySelectorAll('.flatpickr-next-month');
nextMonthButton.addEventListener('click', disableSundays);

const findSundays = () => {
  let calendarDates = document.querySelectorAll('.flatpickr-day ');

  calendarDates.forEach((day) => { 
    let date = new Date(day.getAttribute("aria-label"));
    let dayOfWeek = date.getUTCDay();
    if(dayOfWeek === 0 ){
      disableSunday(day);
    }
  };
}

const disableSunday = (days) => {
  console.log(days);
}

/**********************/
/* RUN ONCE INITIALLY */
/**********************/
findSundays();