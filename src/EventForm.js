import React, { useState } from 'react';
import './App.css';
import './EventForm.css';
import './EventList.css';
import './Event.css';


function EventForm({ addEvent }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date || !time || !description) {
      alert('Please fill in all fields');
      return;
    }
    addEvent({ title, date, time, description });
    setTitle('');
    setDate('');
    setTime('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Název události" required />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Popis" required></textarea>
      <button type="submit">Přidat</button>
    </form>
  );
}

export default EventForm;

