<<<<<<< HEAD
const express = require("express");
const app = express();

const {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
} = require("./tourHandlers.js"); 

// Middleware to parse JSON
app.use(express.json());

// ROUTES
// GET /tours
app.get("/tours", getAllTours);

// POST /tours
app.post("/tours", createTour);

// GET /tours/:tourId
app.get("/tours/:tourId", getTourById);

// PUT /tours/:tourId
app.put("/tours/:tourId", updateTour);

// DELETE /tours/:tourId
app.delete("/tours/:tourId", deleteTour);

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
=======
const express = require('express');
const app = express();

// Import the router (instead of individual functions)
const tourRouter = require('./routes/tourRouter.js');

app.use(express.json());

// Use the router for all /tours routes
app.use('/tours', tourRouter);

const port = 4000;
app.listen(port, () => console.log(`Server on port ${port}`));
>>>>>>> dfee731de32b77151a23b63e3f0f5d944f9309b4
