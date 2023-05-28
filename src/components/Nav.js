
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';


export default function Nav() {
  return (
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar className="nav" color="secondary" position="static">
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
          IdeaNova <ModelTrainingIcon/>
          </Typography>
          
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}