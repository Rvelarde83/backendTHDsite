const Photos = require("../models/photos")

const indexPhotos =  async(req, res)=>{
    try{
       
        res.json(await Photos.find({}))
    }catch (error){a
        //send error
        res.status(400).json(error)
    }
    }

      //Delete
const delPhotos =  async(req, res)=>{
    try{
        res.json( await Photos.findByIdAndDelete(req.params.id))
    }catch(error){
        res.status(400).json(error)
    }
  }

    
  //Photos Update Route
 const updatePhotos=  async(req,res) => {
    try {
        res.json( await Photos.findByIdAndUpdate(req.params.id, req.body, {new: true })
        ) // new:true is not required...
    }catch(error){
        res.status(400).json(error)
    }
  }


    // CREATE
 const createPhotos=  async(req, res) => {
    try {
        res.json(await Photos.create(req.body))
    } catch(error) {
        res.status(400).json(error)
    }
        
  }


  //show Photos indiv
 const showPhotos=  async (req, res) => {
    try {
      res.json(await Photos.findById(req.params.id))
    } catch (error) {
      res.status(400).json(error)
    }
  }

  module.exports = {
    indexPhotos,
    delPhotos,
    updatePhotos,
    createPhotos,
    showPhotos,
  };
  