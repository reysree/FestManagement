import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from "@mui/material";

const EventCard = ({ image, name, type, onAddToCart }) => {
  return (
    <Card sx={{ width: 400, margin: "20px" }}>
      {" "}
      {/* Adjust maxWidth as needed */}
      <CardMedia
        component="img"
        height="200"
        width={100} // Fixed height for all images to ensure uniformity
        image={image}
        alt={name}
        style={{ objectFit: "cover" }} // Ensures the image is properly contained
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {type === "free" ? "Free Event" : "Paid Event"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={onAddToCart}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default EventCard;
