import * as React from "react";
import { Card, CardMedia, Button, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AboutUs() {
    const interns = [
        {
            id: 1,
            image: "https://avatars.githubusercontent.com/u/16322338?v=4",
            firstName: "Damien",
            lastName: "Richcreek",
            salutation: "Mr.",
            description: "I'm a Full Stack Software Engineer building professional web applications!",
            githubLink: "https://github.com/Tactika",
            linkedinLink: "https://www.linkedin.com/in/drichcreek",
            portfolioLink: "https://www.richcreek.dev"
        },
        {
            id: 2,
            image: "https://avatars.githubusercontent.com/u/98143232?v=4",
            firstName: "Frank",
            lastName: "Rivers",
            salutation: "Mr.",
            description: "I'm a Full Stack Software Engineer building professional web applications!",
            githubLink: "https://github.com/F-Rivers",
            linkedinLink: "https://www.linkedin.com/in/rivera-francisco/",
            portfolioLink: "https://frankrivera.carrd.co/"
        },
        {
            id: 3,
            image: "https://avatars.githubusercontent.com/u/104329673?v=4",
            firstName: "Nic",
            lastName: "Last",
            salutation: "Mr.",
            description: "I'm a Full Stack Software Engineer building professional web applications!",
            githubLink: "https://github.com/niclast7611",
            linkedinLink: "linkedin.com/in/nicolas-last",
            portfolioLink: "niclast7611.github.io/nl-portfolio/"
        },
        {
            id: 4,
            image: "https://avatars.githubusercontent.com/u/104322947?v=4",
            firstName: "Valerie",
            lastName: "Tovar",
            salutation: "Ms.",
            description: "I'm a Full Stack Software Engineer building professional web applications!",
            githubLink: "https://github.com/vjtovar",
            linkedinLink: "https://www.linkedin.com/in/valerie-j-tovar/",
            portfolioLink: "https://vjtovar.github.io/my-app/"
        }
    ]
    return (
        <div id="aboutus" className='flex flex-wrap mx-20 justify-around mt-16' >
            {interns.map(intern => {
                return (
                    <Card key={intern.id} className='my-10 mx-10' sx={{
                        height: 'fit-content', maxWidth: 345,
                        boxShadow: '0px 10px 10px 5px rgba(0, 0, 0, 0.6)'
                    }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={intern.image}
                            alt={`${intern.salutation} ${intern.lastName}`}
                        />
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>{`${intern.firstName} ${intern.lastName}`}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {intern.description}
                                </Typography>
                            </AccordionDetails>
                            <Typography>
                                <Button href={intern.githubLink} aria-label={`button to ${intern.firstName}'s Github`} size="small" sx={{ color: 'rgb(112, 76, 182)', fontWeight: 800 }}>GitHub</Button>
                                <Button href={intern.linkedinLink} aria-label={`button to ${intern.firstName}'s LinkedIn`} size="small" sx={{ color: 'rgb(112, 76, 182)', fontWeight: 800 }}>LinkedIn</Button>
                                <Button href={intern.portfolioLink} size="small" aria-label={`button to ${intern.firstName}'s Portfolio`} sx={{ color: 'rgb(112, 76, 182)', fontWeight: 800 }}>Portfolio</Button>
                            </Typography>
                        </Accordion>
                    </Card>
                )
            })}
        </div >
    );
}
