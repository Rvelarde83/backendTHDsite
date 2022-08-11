const Shows = require("../models/shows")

const index =  async(req, res)=>{
    try{
       
        res.json(await Shows.find({}))
    }catch (error){a
        //send error
        res.status(400).json(error)
    }
    }

      //Delete
const del =  async(req, res)=>{
    try{
        res.json( await Shows.findByIdAndDelete(req.params.id))
    }catch(error){
        res.status(400).json(error)
    }
  }

    
  //Shows Update Route
 const update=  async(req,res) => {
    try {
        res.json( await Shows.findByIdAndUpdate(req.params.id, req.body, {new: true })
        ) // new:true is not required...
    }catch(error){
        res.status(400).json(error)
    }
  }


    // CREATE
 const create=  async(req, res) => {
    try {
        res.json(await Shows.create(req.body))
    } catch(error) {
        res.status(400).json(error)
    }
        
  }


  //show Shows indiv
 const show=  async (req, res) => {
    try {
      res.json(await Shows.findById(req.params.id))
    } catch (error) {
      res.status(400).json(error)
    }
  }

  module.exports = {
    index,
    del,
    update,
    create,
    show,
  };
  