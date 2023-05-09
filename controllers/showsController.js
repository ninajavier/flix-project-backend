const express = require("express");
const shows = express.Router();
const {checkRequest, checkId} = require('../validation/checkShow');
const {
    getAllShows,
    getAShow,
    createShow,
    deleteShow,
    updateShow
} = require("../queries/shows");

// shows.use("/")
// Get All
shows.get("/", async(req, res) => {
    const allShows = await getAllShows();
    if(allShows[0]){
        res.status(200).json(allShows);
    }else{
        res.status(500).json({error: "server error"});
    }
});

//Get single
shows.get("/:id", async (req, res) => {
    const {id} = req.params;
    const show = await getAShow(id);
    if(show){
        res.json(show);
    }else{
        res.status(404).json({error:"Show not found"});
    }
});

//Create
shows.post("/",checkRequest, async (req, res) => {
    try{
        const show = await createShow(req.body);
        res.json(show);
    }catch(error){
        res.status(400).json({error: error});
    }
});

//Delete
// shows.delete("/:id", async (req, res) => {
// const {id} = req.params;
// try{const deletedShow = await deleteShow(id);
// res.status(200).json(deleteShow);
// }catch(error){
//     res.status(400).json({error:error});
// }
// });

shows.delete("/:id",checkId, async (req, res) => {
    const {id} = req.params;
    const deletedShow = await deleteShow(id); 
    if(deletedShow.id){
        res.status(200).json(deletedShow);
    }else{
        res.status(400).json({error:"No longer exists"});
    }
    });


//Update
shows.put("/:id",checkRequest, async (req, res) =>{
    const {id} = req.params;
    const updatedShow = await updateShow(id, req.body);
    if(updatedShow.id){
        res.status(200).json(updatedShow);
    }else {
        res.status(404).json("Show not found")
    }
    });
    // shows.put("/:id", async (req, res) =>{
// const {id} = req.params;
// const updatedShow = await updateShow(id, req.body);
// res.status(200).json(updateShow);
// });

module.exports = shows;
