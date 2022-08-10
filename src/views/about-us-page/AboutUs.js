import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function AboutUs() {
  return (
    <div id ="aboutus" className='flex-wrap' >
        {/* damien card */}
        <container spacing={2}>
        <Grid xs={6}>
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
        </Grid>
        <Grid>
        {/* frank card */}
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            height="140"
            image="https://avatars.githubusercontent.com/u/98143232?v=4"
            alt="Mr. Rivera"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Mr. Rivera
            </Typography>
            <Typography variant="body2" color="text.secondary">
            I'm a Junior Full Stack Developer building professional web applications
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">GitHub</Button>
            <Button size="small">LinkedIn</Button>
            <Button size="small">Portfolio</Button>
        </CardActions>
        </Card>
        </Grid>
        <Grid>
        {/* nic card */}
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            height="140"
            image="https://avatars.githubusercontent.com/u/104329673?v=4"
            alt="Mr. Last"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Mr. Last
            </Typography>
            <Typography variant="body2" color="text.secondary">
            I'm a Junior Full Stack Developer building professional web applications
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">GitHub</Button>
            <Button size="small">LinkedIn</Button>
            <Button size="small">Portfolio</Button>
        </CardActions>
        </Card>
        </Grid>
        <Grid>
        {/* val card */}
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            height="140"
            image="https://avatars.githubusercontent.com/u/104322947?v=4"
            alt="Mrs. Tovar"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Mrs. Tovar
            </Typography>
            <Typography variant="body2" color="text.secondary">
            I'm a Junior Full Stack Developer building professional web applications
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">GitHub</Button>
            <Button size="small">LinkedIn</Button>
            <Button size="small">Portfolio</Button>
        </CardActions>
        </Card>
        </Grid>
        </container>
    </div>
  );
}
