/* 
   December 14, 2021
   This script disables every visible Sunday on the meeting room events calendar.
   To do so, it creates temporary date objects in order to determine which days it
   needs to disable (on a scale from 0-6: 0 being Sunday and 6 being Saturday).
   Since the calendar is updated each time a user moves to a new month, an event
   listener is added in order to disable the newly rendered dates.
   Notes about styling:
   The disableSundays() function can be updated to apply premade CSS classes
   if it seems more prudent to do so. { background: lightgray, pointer-events: none }
   There are SVG arrows inside the next/previous months buttons that interfere
   with the event listeners. They have had their style updated in the main
   CSS file under 'Divi > Theme Options'. {pointer-events: none}
*/

/* THIS SET TIMEOUT IS INTENDED TO GET AROUND THE WAY THAT WORDPRESS IS LOADING THE DOM. 
   A TYPICAL 'DOMCONTENTLOADED' EVENT LISTENER DOES NOT SUFFICE, BUT THIS DOES FOR NOW /*

/* Setup months buttons and add event listeners
   to catch newly rendered dates
_______________________________________________________________*/
let months;
setTimeout(init, 2000);
  
function init(){
  months = document.querySelector('.flatpickr-months');
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
  if (!day) return;
  day.style.backgroundColor = 'lightgray';
  day.style['pointer-events'] = 'none';
};

/**********************/
/* RUN ONCE INITIALLY */
/**********************/
findSundays();
  
}
