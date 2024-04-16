import React from 'react';
import Event from './Event';

function EventList({ events, deleteEvent }) {
  return (
    <div>
      {events.map(event => (
        <Event key={event.id} event={event} deleteEvent={deleteEvent} />
      ))}
    </div>
  );
}

export default EventList;
