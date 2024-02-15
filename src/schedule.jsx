import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Container, Button } from '@mui/material';
import './calendar.css'; // Import your custom CSS file

function ImportantDates() {
  // Create your Important Dates component here
  return (
    <div className="important-dates">
      {/* Add your Important Dates content here */}
      <p>Important Dates Component</p>
    </div>
  );
}

function Schedule() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(true);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      <div className="above-box">
        <div className="button-container">
          <Button onClick={() => setShowCalendar(true)}>Schedule</Button>
          <Button onClick={() => setShowCalendar(false)}>Important Dates</Button>
        </div>
        <div className="important-dates-container">
          {showCalendar ? null : <ImportantDates />}
        </div>
        <div className="calendar-container">
          {showCalendar ? (
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
              className="custom-calendar"
            />
          ) : null}
        </div>
      </div>
      <div className="below-box">
        {/* Add your content below the box */}
      </div>
    </Container>
  );
}

export default Schedule;
