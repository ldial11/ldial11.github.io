const events = [
    { date: '2025-04-23', title: 'Hair Appointment' },
    { date: '2025-04-25', title: 'Meeting with Client' }
  ];
  
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  document.addEventListener('DOMContentLoaded', function () {
    const currentDate = new Date();
    const calendarElement = document.getElementById('calendar');
    const addEventBtn = document.getElementById('addEventBtn');
  
    function renderCalendar(month, year) {
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const totalDays = lastDay.getDate();
      const dayOfWeek = firstDay.getDay();
  
      calendarElement.innerHTML = '';
      document.title = `${months[month]} ${year} Schedule`;
  
      for (let i = 0; i < dayOfWeek; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.classList.add('day');
        calendarElement.appendChild(emptyDay);
      }
  
      for (let day = 1; day <= totalDays; day++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.innerHTML = `<div class="day-header">${day}</div>`;
  
        const dayString = `${year}-${(month + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        const dayEvents = events.filter(event => event.date === dayString);
  
        dayEvents.forEach(event => {
          const eventElement = document.createElement('div');
          eventElement.classList.add('event');
          eventElement.innerText = event.title;
          dayElement.appendChild(eventElement);
        });
  
        calendarElement.appendChild(dayElement);
      }
    }
  
    addEventBtn.addEventListener('click', () => {
      const date = prompt('Enter the date for the event (YYYY-MM-DD):');
      const title = prompt('Enter the event title:');
      
      if (date && title) {
        events.push({ date, title });
        renderCalendar(currentDate.getMonth(), currentDate.getFullYear());
      }
    });
  
    renderCalendar(currentDate.getMonth(), currentDate.getFullYear());
  });
  
  