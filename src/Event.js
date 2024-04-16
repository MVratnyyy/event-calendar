import React from 'react';

function Event({ event, deleteEvent }) {
  return (
    <div>
      <h3>{event.title}</h3>
      <p>{event.date} at {event.time}</p>
      <p>{event.description}</p>
      <button onClick={() => deleteEvent(event.id)}>Delete</button>
    </div>
  );
}

export default Event;
