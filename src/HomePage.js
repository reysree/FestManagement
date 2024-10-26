import React, { useState } from "react";
import { Container, Typography, Grid2 } from "@mui/material";
import EventCard from "./EventCard"; // Import the EventCard component
import "./HomePage.css";

// Sample data for events
const sampleEvents = [
  {
    id: 1,
    image: require("./assets/music-fest.jpg"), // Use images in public folder
    name: "Music Fest 2024",
    type: "free",
  },
  {
    id: 2,
    image: require("./assets/art-fest.jpg"),
    name: "Art Expo",
    type: "free",
  },
  {
    id: 3,
    image: require("./assets/food-fest.jpg"),
    name: "Food Carnival",
    type: "paid",
  },
  {
    id: 4,
    image: require("./assets/game-fest.png"),
    name: "Gamers Den",
    type: "free",
  },
  {
    id: 5,
    image: require("./assets/mystery-rooms.png"),
    name: "Mystery Rooms",
    type: "paid",
  },
  {
    id: 5,
    image: require("./assets/standup-comedy.jpg"),
    name: "Stand-Up Comedy",
    type: "free",
  },
];

const HomePage = ({ username }) => {
  // State to handle cart actions
  const [cart, setCart] = useState([]);

  // Function to handle adding an event to the cart
  const handleAddToCart = (eventName) => {
    setCart([...cart, eventName]);
    alert(`${eventName} added to cart!`);
  };

  return (
    <div className="background">
      <Container className="content" maxWidth="xl">
        <Typography variant="h3" component="h1" gutterBottom>
          {username
            ? `Welcome, ${username}!`
            : "Welcome to the Fest Management Portal"}
        </Typography>
        {/* Display Event Cards */}
        <Grid2 container spacing={3}>
          {sampleEvents.map((event) => (
            <Grid2 item xs={12} sm={6} md={4} lg={3} key={event.id}>
              <EventCard
                image={event.image}
                name={event.name}
                type={event.type}
                onAddToCart={() => handleAddToCart(event.name)}
              />
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </div>
  );
};

export default HomePage;
