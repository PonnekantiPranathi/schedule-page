import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Container, Button, Card, CardContent, Typography } from '@mui/material';
import './calendar.css';
import PersonIcon from '@mui/icons-material/Person';

function ImportantDates({ importantDates }) {

  const sortedDates = importantDates.slice().sort((a, b) => a.date - b.date);
  return (
    <div className="important-dates">
      {sortedDates.map((date, index) => {
        const words = date.eventName.split(' ');
        const firstWord = words[0];
        const remainingWords = words.slice(1).join(' ');

        return (
          <Card key={index} style={{ width: '250px', height: '250px', margin: '16px', display: 'inline-block' }}>
            <CardContent>
              <div className="content">
                <div className="event name" style={{ 
                  backgroundColor: '#1816B4', 
                  color: 'white', 
                  padding: '8px', 
                  borderRadius: '4px', 
                  marginBottom: '-3px',
                  fontWeight: 'bold', 
                  fontSize: '18px', 
                  whiteSpace: 'break-word', 
                  height:'45px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center'
                }}>
                  {firstWord.toUpperCase()}<br />
                  {remainingWords.toUpperCase()}
                </div>
                <div className="date-info" style={{backgroundColor: '#d6e6f9'}}>
                  <p style={{ fontSize: '80px', margin:'0', color:'#1816B4' }}>{date.date.getDate()}</p>
                  <p style={{ fontSize: '19px', margin:'0', fontWeight:'bold'}}>{date.date.toLocaleString('default', { month: 'long' }).toUpperCase()}</p>
                  <p style={{ fontSize: '19px', margin:'0', fontWeight:'bold' }}>{date.date.getFullYear()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

function Schedule() {
  const [selectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [importantDates] = useState([
    { eventName: 'Application Deadline', date: new Date(2024, 0, 15) },
    { eventName: 'Resume Shortlisting', date: new Date(2024, 0, 20) },
    { eventName: 'Written Test', date: new Date(2024, 0, 22) },
    { eventName: 'Interview Round 1', date: new Date(2024, 0, 12) },
    { eventName: 'Interview Round 2', date: new Date(2024, 0, 29) },
    { eventName: 'Interview Round 3', date: new Date(2024, 0, 30) },
    { eventName: 'Result', date: new Date(2024, 1, 2) },
    { eventName: 'Offer Letter', date: new Date(2024, 1, 5) },
  ]);

  return (
    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '100vh' }}>
      <div className="header-container" style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Typography variant="h6" style={{ marginTop:'30px', marginLeft: '950px', fontWeight: 'bold' }}>COMPANY NAME</Typography>
        <PersonIcon style={{ marginTop: '33px' }} />
      </div>
      <Typography variant="h7" style={{ marginLeft: '35px', marginBottom: '5px', color: 'blue', textDecoration: 'underline' }}>Schedule</Typography>
      <div className="above-box" style={{ width: '100%' }}>
        <div className="button-container-wrapper">
          <div className="button-container">
            <Button onClick={() => setShowCalendar(false)} style={{ color: showCalendar ? 'initial' : 'darkblue', backgroundColor: showCalendar ? 'initial' : '#d6e6f9', borderRadius: '15px' }}>Important Dates</Button>
            <Button onClick={() => setShowCalendar(true)} style={{ color: showCalendar ? 'darkblue' : 'initial', backgroundColor: showCalendar ? '#d6e6f9' : 'initial', borderRadius: '15px' }}>Schedule</Button>
          </div>
        </div>
        <div className="important-dates-container">
          {showCalendar ? null : <ImportantDates importantDates={importantDates} />}
        </div>
        <div className="calendar-container">
          {showCalendar ? (
            <div>
              <Calendar
                value={selectedDate}
                className="custom-calendar"
                tileContent={({ date }) => {
                  const isImportantDate = importantDates.some(
                    (d) => d.date.toDateString() === date.toDateString()
                  );
                  if (isImportantDate) {
                    const matchingDate = importantDates.find(
                      (d) => d.date.toDateString() === date.toDateString()
                    );
                    return (
                      <div className="important-date-marker">
                        {matchingDate && (
                          <div className="event-title-box">
                            <div className="event-title">
                              <div>{matchingDate.eventName.split(' ')[0]}</div>
                              <div>{matchingDate.eventName.split(' ').slice(1).join(' ')}</div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  }
                }}
              />
            </div>
          ) : null}
        </div>
      </div>
      <div className="below-box">
        {/* */}
      </div>
    </Container>
  );
}

export default Schedule;