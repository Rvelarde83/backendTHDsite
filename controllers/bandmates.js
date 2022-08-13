const Bandmates = require("../models/bandmates")

const indexBandmates =  async(req, res)=>{
    try{
       
        res.json(await Bandmates.find({}))
    }catch (error){a
        //send error
        res.status(400).json(error)
    }
    }

      //Delete
const delBandmates =  async(req, res)=>{
    try{
        res.json( await Bandmates.findByIdAndDelete(req.params.id))
    }catch(error){
        res.status(400).json(error)
    }
  }

    
  //Bandmates Update Route
 const updateBandmates=  async(req,res) => {
    try {
        res.json( await Bandmates.findByIdAndUpdate(req.params.id, req.body, {new: true })
        ) // new:true is not required...
    }catch(error){
        res.status(400).json(error)
    }
  }


    // CREATE
 const createBandmates=  async(req, res) => {
    try {
        res.json(await Bandmates.create(req.body))
    } catch(error) {
        res.status(400).json(error)
    }
        
  }


  //show Bandmates indiv
 const showBandmates=  async (req, res) => {
    try {
      res.json(await Bandmates.findById(req.params.id))
    } catch (error) {
      res.status(400).json(error)
    }
  }

  module.exports = {
    indexBandmates,
    delBandmates,
    updateBandmates,
    createBandmates,
    showBandmates,
  };
  