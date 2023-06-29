const jwt = require("jsonwebtoken");
const { type } = require("../../constant.js");
const Viewer = require("../../models/user.js");
const Theater = require("../../models/MovieHall.js");

const login = async (req, res) => {
  const { email, password, usertype } = req.body;

  try {
    if (usertype === type.VIEWER) {
      const data = await Viewer.findOne({ email });
      if (data) {
        if (data.password !== password) {
          res.status(500).send({ msg: "wrong password" });
        } else {
          const token = jwt.sign({ id: data._id, type: usertype }, "arzit");

          res.send({ ...data, token });
        }
      } else {
        res.status(500).send({ msg: "user not present" });
      }
    } else if (usertype === type.THEATER) {
      const data = await Theater.findOne({ email, password });
      console.log(data);
      if (data) {
        if (data.password !== password) {
          res.status(500).send({ msg: "wrong password" });
        } else {
          const token = jwt.sign({ id: data._id, type: usertype }, "arzit");

          res.send({ ...data, token });
        }
      } else {
        res.status(500).send({ msg: "theater  not present" });
      }
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = login;
