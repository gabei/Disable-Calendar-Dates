# Disable-Calendar-Dates

A workaround to disable calendar dates and avoid buying a plugin...

This script disables every visible Sunday on the meeting room events calendar. To do so, it creates temporary date objects in order to determine which days it needs to disable (on a scale from 0-6: 0 being Sunday and 6 being Saturday).

Since the calendar is updated each time a user moves to a new month, an event listener is added in order to disable the newly rendered dates.

**Notes about styling:** <br />
The disableSundays() function can be updated to apply premade CSS classes if it seems more prudent to do so.
`{ background: lightgray, pointer-events: none }`

There are SVG arrows inside the next/previous months buttons that interfere with the event listeners. They have had their style updated in the main CSS file under 'Divi > Theme Options':
`{pointer-events: none}` on line 238
