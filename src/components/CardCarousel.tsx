import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const cardStyle = {
  width: 1000, // Adjust the width as needed
  backgroundColor: "#E5DBFB",
  borderRadius: 5,
  margin: "auto", // Center the card
};

const CrousalCard = () => {
  return (
    <Card sx={cardStyle}>
      <CardContent sx={{minHeight:300}}>
        <Typography sx={{ fontFamily:'bold', fontSize:20, marginTop:10 }} color="text.secondary" gutterBottom>
          “I've been using FinanceFast for a few months now and it's completely
          transformed the way I send money to my family abroad. The platform is
          so easy to use and transfers are always fast and secure.”
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CrousalCard;
