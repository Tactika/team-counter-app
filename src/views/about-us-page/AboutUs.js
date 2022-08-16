import * as React from "react";
import { Card, CardMedia, Button, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AboutUs() {
    return (
        <div id="aboutus" className='flex flex-wrap mx-20 justify-around mt-16' >
            {/* damien card */}
            <Card className='my-10 mx-10' sx={{
                height: 'fit-content', maxWidth: 345,
                boxShadow: '0px 10px 10px 5px rgba(0, 0, 0, 0.6)'
            }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://avatars.githubusercontent.com/u/16322338?v=4"
                    alt="Mr. Richcreek"
                />
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Damien Richcreek</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            I'm a Full Stack Software Engineer building professional web applications!
                        </Typography>
                    </AccordionDetails>
                    <Typography>
                        <Button href="https://github.com/Tactika" aria-label="button to Damien's Github" size="small" sx={{ color: 'rgb(112, 76, 182)', fontWeight: 800 }}>GitHub</Button>
                        <Button href="https://www.linkedin.com/in/drichcreek" aria-label="button to Damien's LinkedIn" size="small" sx={{ color: 'rgb(112, 76, 182)', fontWeight: 800 }}>LinkedIn</Button>
                        <Button href="https://www.richcreek.dev" size="small" aria-label="button to Damien's Portfolio" sx={{ color: 'rgb(112, 76, 182)', fontWeight: 800 }}>Portfolio</Button>
                    </Typography>
                </Accordion>
            </Card>
            {/* frank card */}
            <Card className='my-10 mx-10' sx={{ height: 'fit-content', maxWidth: 345, boxShadow: '0px 10px 10px 5px rgba(0, 0, 0, 0.6)' }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://avatars.githubusercontent.com/u/98143232?v=4"
                    alt="Mr. Richcreek"
                />
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Frank Rivers</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            I'm a Full Stack Software Engineer building professional web applications!
                        </Typography>
                    </AccordionDetails>
                    <Typography>
                        <Button href="https://github.com/F-Rivers" aria-label="button to Frank's Github" size="small" sx={{ color: 'rgb(112, 76, 182)', fontWeight: 800 }}>GitHub</Button>
                        <Button href="https://www.linkedin.com/in/rivera-francisco/" aria-label="button to Frank's LinkedIn" size="small" sx={{ color: 'rgb(112, 76, 182)', fontWeight: 800 }}>LinkedIn</Button>
                        <Button href="https://frankrivera.carrd.co/" size="small" aria-label="button to Frank's Portfolio" sx={{ color: 'rgb(112, 76, 182)', fontWeight: 800 }}>Portfolio</Button>
                    </Typography>
                </Accordion>
            </Card>
            {/* nic card */}
            <Card className='my-10 mx-10' sx={{ height: 'fit-content', maxWidth: 345, boxShadow: '0px 10px 10px 5px rgba(0, 0, 0, 0.6)' }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://avatars.githubusercontent.com/u/104329673?v=4"
                    alt="Mr. Richcreek"
                />
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Nic Last</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            I'm a Full Stack Software Engineer building professional web applications!
                        </Typography>
                    </AccordionDetails>
                    <Typography>
                        <Button href="https://github.com/niclast7611" aria-label="button to Nic's Github" size="small" sx={{ color: 'rgb(112, 76, 182)', fontWeight: 800 }}>GitHub</Button>
                        <Button href="https://www.linkedin.com/in/nicolas-last-095099239/" aria-label="button to Nic's LinkedIn" size="small" sx={{ color: 'rgb(112, 76, 182)', fontWeight: 800 }}>LinkedIn</Button>
                        <Button href="niclast7611.github.io/nl-portfolio/" aria-label="button to Nic's Portfolio" size="small" sx={{ color: 'rgb(112, 76, 182)', fontWeight: 800 }}>Portfolio</Button>
                    </Typography>
                </Accordion>
            </Card>
            {/* val card */}
            <Card className='my-10 mx-10' sx={{ height: 'fit-content', maxWidth: 345, boxShadow: '0px 10px 10px 5px rgba(0, 0, 0, 0.6)' }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://avatars.githubusercontent.com/u/104322947?v=4"
                    alt="Mr. Richcreek"
                />
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Valerie Tovar</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            I'm a Full Stack Software Engineer building professional web applications!
                        </Typography>
                    </AccordionDetails>
                    <Typography>
                        <Button href="https://github.com/vjtovar" aria-label="button to Nic's Github" size="small" sx={{ color: 'rgb(112, 76, 182)', fontWeight: 800 }}>GitHub</Button>
                        <Button href="https://www.linkedin.com/in/valerie-j-tovar/" aria-label="button to Nic's Github" size="small" sx={{ color: 'rgb(112, 76, 182)', fontWeight: 800 }}>LinkedIn</Button>
                        <Button href="https://vjtovar.github.io/my-app/" aria-label="button to Nic's Github" size="small" sx={{ color: 'rgb(112, 76, 182)', fontWeight: 800 }}>Portfolio</Button>
                    </Typography>
                </Accordion>
            </Card>

        </div >
    );
}
