import React from "react";

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function IdeaCard(props) {
  return(
    <Card  className="card" sx={{ minWidth: 200 }}>
    <CardContent>
   

      <Typography variant="h5" component="div">
        {props.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {props.description}
      </Typography>
      <Button
        color="secondary"
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Go To Link
      </Button>
    </CardContent>
  </Card>
  );
  
}