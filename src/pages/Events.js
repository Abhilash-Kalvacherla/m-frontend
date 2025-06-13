// src/pages/Events.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Events.css';

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const Events = () => {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({ name: '', date: '', type: '' });

  const fetchEvents = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/events');
      setEvents(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/api/events', formData);
      setFormData({ name: '', date: '', type: '' });
      fetchEvents();
    } catch (err) {
      alert('Error submitting event');
    }
  };

  const eventsByMonth = monthNames.map((_, monthIndex) =>
    events.filter(e => new Date(e.date).getMonth() === monthIndex)
  );

  return (
    <div className="events-container">
      <h2>Add Birthday's/Anniversary's</h2>
      <div className="event-form">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input type="date" name="date" value={formData.date} onChange={handleChange} />
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="">Select Type</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        <button onClick={handleSubmit}>Add</button>
      </div>

      <div className="months-grid">
        {monthNames.map((month, idx) => (
          <div key={idx} className="month-card">
            <h3>{month}</h3>
            <ul>
              {eventsByMonth[idx].length === 0 ? (
                <li>No events</li>
              ) : (
                eventsByMonth[idx].map((event) => (
                  <li key={event._id}>
                    <strong>{event.name}</strong> - {new Date(event.date).toLocaleDateString()} ({event.type})
                  </li>
                ))
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
