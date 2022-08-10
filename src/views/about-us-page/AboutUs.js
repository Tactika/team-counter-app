import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function AboutUs() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://avatars.githubusercontent.com/u/16322338?v=4"
        alt="Mr. Richcreek"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Mr. Richcreek
        </Typography>
        <Typography variant="body2" color="text.secondary">
        I'm a Full Stack Software Engineer building professional web applications!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">GitHub</Button>
        <Button size="small">LinkedIn</Button>
        <Button size="small">Portfolio</Button>
      </CardActions>
    </Card>
  );
}
