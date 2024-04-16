import React, { useState, useEffect } from 'react';
import EventForm from './EventForm';
import EventList from './EventList';
import DateTimeDisplay from './DateTimeDisplay'; // Přidejte import

function App() {
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem('events');
    return savedEvents ? JSON.parse(savedEvents) : [];
  });

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const addEvent = (event) => {
    setEvents([...events, { ...event, id: Date.now() }]);
  };

  const deleteEvent = (id) => {
    const updatedEvents = events.filter(event => event.id !== id);
    setEvents(updatedEvents);
  };

  return (
    <div className="container">
      <h1>Event Calendar</h1>
      <EventForm addEvent={addEvent} />
      <EventList events={events} deleteEvent={deleteEvent} />
      <DateTimeDisplay /> {/* Přidání zobrazení data a času */}
    </div>
  );
}

export default App;
