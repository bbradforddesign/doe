import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const About = () => {
  return (
    <Box style={{ padding: "0 5% 5% 5%" }}>
      <Typography
        variant="h3"
        align="center"
        color="primary"
        style={{ marginBottom: "20px" }}
      >
        About Doe
      </Typography>
      <Typography variant="body1" style={{ marginBottom: "10px" }}>
        Doe is a movement to redefine how the average person tracks their
        budget. While many companies offer paid software to manage personal
        finances, not everyone can afford them, and free options are often
        difficult to use, or have a steep learning curve. Rather than forcing
        everyone to learn spreadsheet macros, we did the hard work and created a
        tool that automatically sorts recorded transactions, and prepares an
        easy-to-read financial report.
      </Typography>
      <Typography variant="body1" style={{ marginBottom: "20px" }}>
        Registration is a cinch, with one-click authorization provided by
        Google. All you need is a Google account to get started. Best yet, Doe
        was created with mobile in mind, so everyone can get the full experience
        no matter what device.
      </Typography>
      <Typography
        variant="body1"
        align="center"
        style={{ marginBottom: "60px" }}
      >
        <strong>Get smarter about your money today!</strong>
      </Typography>
      <Typography variant="h6" align="center">
        &#169;2020 Doe
      </Typography>
    </Box>
  );
};

export default About;
