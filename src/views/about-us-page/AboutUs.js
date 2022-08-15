import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AboutUs() {
  return (
    <div id="aboutus" className="flex flex-wrap mx-20 justify-around mt-16">
      {/* damien card */}
      <Card
        className="my-10 mx-10"
        sx={{
          height: "fit-content",
          maxWidth: 345,
          boxShadow: "0px 10px 10px 5px rgba(0, 0, 0, 0.6)",
        }}
      >
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
              I'm a Full Stack Software Engineer building professional web
              applications!
            </Typography>
          </AccordionDetails>
          <Typography>
            <Button
              size="small"
              sx={{ color: "rgb(112, 76, 182)", fontWeight: 800 }}
            >
              GitHub
            </Button>
            <Button
              size="small"
              sx={{ color: "rgb(112, 76, 182)", fontWeight: 800 }}
            >
              LinkedIn
            </Button>
            <Button
              size="small"
              sx={{ color: "rgb(112, 76, 182)", fontWeight: 800 }}
            >
              Portfolio
            </Button>
          </Typography>
        </Accordion>
      </Card>
      {/* frank card */}
      <Card
        className="my-10 mx-10"
        sx={{
          height: "fit-content",
          maxWidth: 345,
          boxShadow: "0px 10px 10px 5px rgba(0, 0, 0, 0.6)",
        }}
      >
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
              I'm a Full Stack Software Engineer building professional web
              applications!
            </Typography>
          </AccordionDetails>
          <Typography>
            <Button
              size="small"
              sx={{ color: "rgb(112, 76, 182)", fontWeight: 800 }}
            >
              GitHub
            </Button>
            <Button
              size="small"
              sx={{ color: "rgb(112, 76, 182)", fontWeight: 800 }}
            >
              LinkedIn
            </Button>
            <Button
              size="small"
              sx={{ color: "rgb(112, 76, 182)", fontWeight: 800 }}
            >
              Portfolio
            </Button>
          </Typography>
        </Accordion>
      </Card>
      {/* nic card */}
      <Card
        className="my-10 mx-10"
        sx={{
          height: "fit-content",
          maxWidth: 345,
          boxShadow: "0px 10px 10px 5px rgba(0, 0, 0, 0.6)",
        }}
      >
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
              I'm a Full Stack Software Engineer building professional web
              applications!
            </Typography>
          </AccordionDetails>
          <Typography>
            <Button
              size="small"
              sx={{ color: "rgb(112, 76, 182)", fontWeight: 800 }}
            >
              GitHub
            </Button>
            <Button
              size="small"
              sx={{ color: "rgb(112, 76, 182)", fontWeight: 800 }}
            >
              LinkedIn
            </Button>
            <Button
              size="small"
              sx={{ color: "rgb(112, 76, 182)", fontWeight: 800 }}
            >
              Portfolio
            </Button>
          </Typography>
        </Accordion>
      </Card>
      {/* val card */}
      <Card
        className="my-10 mx-10"
        sx={{
          height: "fit-content",
          maxWidth: 345,
          boxShadow: "0px 10px 10px 5px rgba(0, 0, 0, 0.6)",
        }}
      >
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
              I'm a Full Stack Software Engineer building professional web
              applications!
            </Typography>
          </AccordionDetails>
          <Typography>
            <Button
              size="small"
              sx={{ color: "rgb(112, 76, 182)", fontWeight: 800 }}
            >
              GitHub
            </Button>
            <Button
              size="small"
              sx={{ color: "rgb(112, 76, 182)", fontWeight: 800 }}
            >
              LinkedIn
            </Button>
            <Button
              size="small"
              sx={{ color: "rgb(112, 76, 182)", fontWeight: 800 }}
            >
              Portfolio
            </Button>
          </Typography>
        </Accordion>
      </Card>
    </div>
  );
}
