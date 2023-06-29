const express = require("express");
const router = express.Router();

const { addMovie, getMovies, getMovieById, updateMovie, deleteMovie,movieByreleaseDate } = require("../controller/MovieController/Movie.js");

// Create a movie
router.post("/",addMovie );

// Read all movies
router.get("/",getMovies );

// Read a specific movie by ID
router.get("/:id", getMovieById);

// Update a movie
router.put("/:id",updateMovie );

// Delete a movie
router.delete("/:id", deleteMovie);

// Get movies by release date
router.get("/releasedate/:date",movieByreleaseDate);

module.exports = router;
