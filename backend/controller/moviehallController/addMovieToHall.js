const Hall = require("../../models/MovieHall.js")


const addMoviesToHall =async(req,res)=>{

    const {id,movieId}= req.body;

        try
        {
            const data=await Hall.findByIdAndUpdate(id,{$push:{PresentMovies:{id:movieId,end:new Date(),runningStatus:[]}},},{new:true})
          res.send(data);
        }
        catch(err)
        {  console.log(err)
            res.status(500).send(err)
          
        }
     




}

module.exports =addMoviesToHall