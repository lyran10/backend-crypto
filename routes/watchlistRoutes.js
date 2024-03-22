const express = require("express")
const router = express.Router()
const { addToWatchlist, getList, deleteCoin } = require("../controllers/watchlistControllers.js")
const { auth } = require("../auth/auth.js")


router.post("/addcoin", auth, addToWatchlist);

router.post("/list", auth, getList);

router.post("/deletecoin", auth, deleteCoin);

module.exports = router