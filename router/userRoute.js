import express from "express";

// init router
const router = express.Router();


// route
router.get("/test", (req, res) =>{
    res.json("api is working")
});


export default router;