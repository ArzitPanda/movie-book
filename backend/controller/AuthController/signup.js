const mongoose = require("mongoose");
const viewer = require("../../models/user.js");
const theater = require("../../models/MovieHall.js");
const { type } = require("../../constant.js");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  if (req.params.type === type.VIEWER) {
    const { username, email, mobile, city, pincode, password } = req.body;

    const user = new viewer({
      username,
      email,
      mobile,
      password,
      location: { city, pincode },
      bookMovie: [],
      watchedMovies: [],
    });

    try {
      const data = await user.save();
      const token = jwt.sign({ id: data._id, type: type.VIEWER }, "arzit");

      res.status(201).send({ ...data._doc, token });
    } catch (error) {
        console.log(error)
            if(error.code===11000)
            {
                res.status(500).send({msg:"user already present"})
            }
            else
            {
                res.status(500).send({ msg: error });
            }



     
    }
  } else if (req.params.type === type.THEATER) {
    const { name, city, pincode, email, password } = req.body;

    const hall = new theater({
      name,
      email,
      pincode,
      city,
      password,
      moviesOnTheater: [],
      PresentMovies: [],
    });

    try {
      const data = await hall.save();
      const token = jwt.sign({ id: data._id, type: type.THEATER }, "arzit");
      res.status(201).send({ ...data._doc, token });
    } catch (error) {
        console.log(error)
      res.status(500).send({ msg: "error occured" });
    }
  } else {
    res.send("not valid");
  }
};

module.exports = signup;
