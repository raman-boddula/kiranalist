const mongoose = require("mongoose");

const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        
    }
    catch (err) {
        res.status(400).json({Status:"Failed",})
    }
})