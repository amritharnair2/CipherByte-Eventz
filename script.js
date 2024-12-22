const eventForm = document.getElementById('event-form');
const eventsList = document.getElementById('events');

eventForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Get input values
  const eventName = document.getElementById('event-name').value;
  const eventDate = document.getElementById('event-date').value;
  const eventTime = document.getElementById('event-time').value;
  const eventLocation = document.getElementById('event-location').value;

  const eventItem = document.createElement('li');
  eventItem.classList.add('event-item');
  eventItem.innerHTML = `
    <h3>${eventName}</h3>
    <p>Date: ${eventDate}</p>
    <p>Time: ${eventTime}</p>
    <p>Location: ${eventLocation}</p>
  `;

  eventsList.appendChild(eventItem);

  eventForm.reset();
});
