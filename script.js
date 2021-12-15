// add CSS classes to wordpress to disable these buttons, or add them in code here
// ---- preferably the former
// background: lightgray, pointer-events: none

// POINTER EVENTS ON THE SVG MUST BE SET TO NONE IN ORDER TO NOT
// INTERACT WITH THE EVENT LISTENER

/* Setup months buttons and add event listeners
   to catch newly rendered dates
_______________________________________________________________*/
const months = document.querySelector('.flatpickr-months');

months.addEventListener('click', function (e) {
  if (
    e.target.className === 'flatpickr-next-month' ||
    e.target.className === 'flatpickr-prev-month'
  ) {
    findSundays();
  }
});

/* Locate sundays ( basically: day of week = 0 out of 0-6) )
_______________________________________________________________*/

const findSundays = () => {
  let calendarDates = document.querySelectorAll('.flatpickr-day ');

  calendarDates.forEach((day) => {
    let date = new Date(day.getAttribute('aria-label'));
    let dayOfWeek = date.getUTCDay();
    if (dayOfWeek === 0) {
      disableSunday(day);
    }
  });
};

/* Disable the buttons phyiscally and visually 
_______________________________________________________________*/
const disableSunday = (day) => {
  console.log(day);
  day.style.backgroundColor = 'lightgray';
  day.style['pointer-events'] = 'none';
};

/**********************/
/* RUN ONCE INITIALLY */
/**********************/
findSundays();
