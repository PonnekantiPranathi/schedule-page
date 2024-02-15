// My LeftSide bar Main
import React, { useState } from 'react';
import { CssBaseline, Box, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import { School } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ScheduleIcon from '@mui/icons-material/Schedule';

const LeftSidebar = ({ defaultCollapsed = false }) => {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  return (
    <>
      <CssBaseline />
      <Box style={{ display: 'flex', height: '100vh', overflow: 'hidden', width: '100%' }}>
        <Box 
          sx={{
            width: collapsed ? '60px' : '240px', 
            borderRight: '1px solid black', 
            height: '100%', 
            backgroundColor: 'darkblue',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 2,
            transition: 'width 0.3s',
            boxSizing: 'border-box',
            fontFamily: 'Georgia'  
          }}
        >
          <Box>
            {collapsed ? (
              <Button onClick={() => setCollapsed(false)} style={{ justifyContent: 'center' }}>
                <School fontSize="large" />
              </Button>
            ) : (
              <Button 
                onClick={() => setCollapsed(true)} 
                style={{ justifyContent: 'left', color: 'white', fontSize: '1.2em', marginBottom: '4.5em', marginTop: '1em', marginLeft: '1.3em', fontFamily: 'Georgia' }} // Changed font here
              >
                RECRUITER
              </Button>
            )}

              <List>
                {[
                    { text: 'Profile', icon: <PersonIcon /> },
                    { text: 'Application', icon: <AssignmentIcon /> },
                    { text: 'POC', icon: <ContactPhoneIcon /> },
                    { text: 'Schedule', icon: <ScheduleIcon /> }
                ].map((item) => (
                    <ListItem button key={item.text} onClick={() => setCollapsed(true)}>
                      {item.icon}
                      <Box 
                        sx={{
                          width: collapsed ? 0 : 'auto', 
                          overflow: 'hidden',
                          transition: 'width 0.3s',
                          marginLeft: 2
                        }}
                      >
                        <ListItemText 
                          primary={item.text}
                          primaryTypographyProps={{ fontFamily: 'Georgia' }}
                        />
                      </Box>
                    </ListItem>
                ))}
              </List>
            
          </Box>

          {!collapsed && (
            <Box sx={{ marginTop: 'auto', display: 'flex', alignItems: 'center' }}>
              <School fontSize="large" />
              
              <Box sx={{ marginLeft: 2 }}>
                <Typography variant="body2" sx={{ fontFamily: 'Georgia', lineHeight: 1, fontWeight: 'bold', fontSize: 'body2.fontSize + 1' }}>  
                  IIT GOA
                </Typography>
                <Typography variant="caption" sx={{ fontFamily: 'Georgia', fontSize: 'caption.fontSize + 2'}}>  
                  Career Development Cell
                </Typography>
              </Box>
            </Box>
          )}
        </Box>

        <Box 
          sx={{
            flex: 1, 
            backgroundColor: 'white'
          }}
        >
          
        </Box>
      </Box>
    </>
  );
}

export default LeftSidebar;
