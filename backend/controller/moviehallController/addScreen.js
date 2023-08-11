const Hall = require("../../models/MovieHall.js");

const addScreen = async (req, res) => {
  const { id, screenName, screenseats } = req.body;

  const ScreenName = await Hall.findOne({
    _id: id,
    screens: { $elemMatch: { name: screenName } },
  });



  

  if (!ScreenName) {
    const data = await Hall.findByIdAndUpdate(id, {
      $push: { screens: { name: screenName, seats: screenseats } },
     
    }, { new: true });
   res.send(data)
  }
  else
{
    res.send({msg:"screen is already present",data:ScreenName.screens})
}
}


;
module.exports = addScreen;
