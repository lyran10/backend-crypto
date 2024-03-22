const express = require("express")
const multer = require("multer")
const router = express.Router()
const { createUser, loginUser, findUser } = require("../controllers/userControllers.js")
const { auth } = require("../auth/auth.js")

// const storage = multer.diskStorage({
//   destination : (req, file, cb) => {
//     cb(null,"./images")
//   },
//   filename : (req, file, cb) => {
//     console.log(file)
//     cb(Date.now + path.extname(file.originalname))
//   }
// })

// const upload = multer({storage : storage})

router.post("/signup", createUser);

router.post("/login", loginUser);

// router.post("/uploads",upload.single("image"),() => {
//   res.json({msg : "image"})
//   console.log("iamge")
// });

router.post("/expiry", auth, findUser);

router.get("/logout", (req, res) => {
  return res.clearCookie("token", { path: "/" }).status(200).json({ status: false, msg: "Logged out successfully" });
});




module.exports = router