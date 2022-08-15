import { Link } from "react-router-dom";
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const theme = createTheme({
  spacing: 4,
  typography: {
    subtitle1: {
      fontSize: 42,
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: "bold",
    },
  },
});
const NotFoundPage = () => {
  return (
    <div id="aboutus" className="flex-wrap">
      <ThemeProvider theme={theme}>
        <Typography variant="subtitle1">ERROR 404</Typography>
        <Typography>
          <ls>
            <li>This Page Is Not Found </li>
            <li>Do you have errors in your server terminal?</li>
            <li>Have you cleared your browser console for errors?</li>
            <li>Did you just type in random letters and words in the URL? </li>
          </ls>
        </Typography>
        <Button>
          <Link to="/">Go Home</Link>
        </Button>
        |
        <Button>
          <Link to="https://letmegooglethat.com/">What is the problem?</Link>
        </Button>
      </ThemeProvider>
    </div>
  );
};

export default NotFoundPage;
