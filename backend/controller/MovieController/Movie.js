
const Movie = require("../../models/movies.js")


const addMovie =async (req, res) => {
    try {
      const movie = new Movie(req.body);
      const savedMovie = await movie.save();
      res.json(savedMovie);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }


  const getMovies =async (req, res) => {
    try {
      const movies = await Movie.find();
      res.json(movies);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }


  const getMovieById =async (req, res) => {
    try {
      const movie = await Movie.findById(req.params.id);
      if (!movie) {
        return res.status(404).json({ error: "Movie not found" });
      }
      res.json(movie);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }



  const updateMovie =async (req, res) => {
    try {
      const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!movie) {
        return res.status(404).json({ error: "Movie not found" });
      }
      res.json(movie);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

const deleteMovie =async (req, res) => {
  try {
    const movie = await Movie.findByIdAndRemove(req.params.id);
    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }
    res.json({ message: "Movie deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const movieByreleaseDate = async (req, res) => {
  try {
    const date = new Date(req.params.date);
    const movies = await Movie.find({ releaseDate: { $gte: date } });
    res.json(movies);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}



module.exports ={addMovie,getMovies,getMovieById,deleteMovie,updateMovie,movieByreleaseDate}





