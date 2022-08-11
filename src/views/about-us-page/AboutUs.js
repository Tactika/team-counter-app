import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';

export default function AboutUs() {
    return (
        <div id="aboutus" className='flex flex-wrap mx-20 justify-around' >
            {/* damien card */}
            <Card className='my-10 mx-10' sx={{ maxHeight: 550, maxWidth: 345, boxShadow: '0px 10px 20px 5px rgb(112, 76, 182)' }}>
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
                    <Button size="small" sx={{ color: 'rgb(112, 76, 182)', fontWeight: 800 }}>GitHub</Button>
                    <Button size="small" sx={{ color: 'rgb(112, 76, 182)', fontWeight: 800 }}>LinkedIn</Button>
                    <Button size="small" sx={{ color: 'rgb(112, 76, 182)', fontWeight: 800 }}>Portfolio</Button>
                </CardActions>
            </Card>
            {/* frank card */}
            <Card className='my-10 mx-10' sx={{ maxHeight: 550, maxWidth: 345, boxShadow: '0px 10px 20px 5px rgb(112, 76, 182)' }}>
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
                    <Button size="small" sx={{ color: 'rgb(112, 76, 182)', fontWeight: 800 }}>GitHub</Button>
                    <Button size="small" sx={{ color: 'rgb(112, 76, 182)', fontWeight: 800 }}>LinkedIn</Button>
                    <Button size="small" sx={{ color: 'rgb(112, 76, 182)', fontWeight: 800 }}>Portfolio</Button>
                </CardActions>
            </Card>
            {/* nic card */}
            <Card className='my-10 mx-10' sx={{ maxHeight: 550, maxWidth: 345, boxShadow: '0px 10px 20px 5px rgb(112, 76, 182)' }}>
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
                    <Button size="small" sx={{ color: 'rgb(112, 76, 182)', fontWeight: 800 }}>GitHub</Button>
                    <Button size="small" sx={{ color: 'rgb(112, 76, 182)', fontWeight: 800 }}>LinkedIn</Button>
                    <Button size="small" sx={{ color: 'rgb(112, 76, 182)', fontWeight: 800 }}>Portfolio</Button>
                </CardActions>
            </Card>
            {/* val card */}
            <Card className='my-10 mx-10' sx={{ maxHeight: 550, maxWidth: 345, boxShadow: '0px 10px 20px 5px rgb(112, 76, 182)' }}>
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
                    <Button size="small" sx={{ color: 'rgb(112, 76, 182)', fontWeight: 800 }}>GitHub</Button>
                    <Button size="small" sx={{ color: 'rgb(112, 76, 182)', fontWeight: 800 }}>LinkedIn</Button>
                    <Button size="small" sx={{ color: 'rgb(112, 76, 182)', fontWeight: 800 }}>Portfolio</Button>
                </CardActions>
            </Card>
        </div>
    );
}
