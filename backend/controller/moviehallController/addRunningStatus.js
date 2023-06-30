const Hall = require("../../models/MovieHall.js");

const addRunningStatus = async (req, res) => {
  const { id, movieId, slot, screenName, seatBooked,date} = req.body;


  try {
    const isDatePresent = await Hall.findOne({
      _id: id,
      PresentMovies: {
        $elemMatch: {
          id: movieId,
          runningStatus: {
            $elemMatch: {
              date: date, //"2023-06-30"
              slot: slot,
              screenName: screenName,
            },
          },
        },
      },
    });

    console.log(isDatePresent);

    if (!isDatePresent) {
      const data1 = await Hall.findOne({
        $and: [{ _id: id }, { PresentMovies: { $elemMatch: { id: movieId } } }],
      });
      console.log(data1);

      const data = await Hall.updateOne(
        { _id: id, "PresentMovies.id": movieId },
        {
          $push: {
            "PresentMovies.$.runningStatus": {
              date: date,
              slot: 1,
              screenName: screenName,
              seatBooked: seatBooked,
              staus: 1,
            },
          },
        },
        { new: true }
      );
      res.send(data);
    } else {
      const data = await Hall.updateOne(
        {
          _id: id,
          PresentMovies: { $elemMatch: { id: movieId } },
          "PresentMovies.runningStatus": {
            $elemMatch: { date: date, slot: slot, screenName: screenName },
          },
        },
        {
          $push: {
            "PresentMovies.$.runningStatus.$[elem].seatBooked": {
              $each: seatBooked,
            },
          },

          $set: {
            "PresentMovies.$.runningStatus.$[elem].status": 2,
          },
        },
        {
          new: true,
          arrayFilters: [
            {
              "elem.date": date,
              "elem.slot": slot,
              "elem.screenName": screenName,
            },
          ],
        }
      );

      console.log("exist", data);
      if (data) {
        res.send({ msg: "succesfully updated" });
      } else {
        res.status(500).send({ msg: "something error happen" });
      }
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = addRunningStatus;
