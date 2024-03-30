const express = require("express")
const { connectDB } = require("./connection/connection.js")
const app = express()
const userRouter = require("./routes/userRoutes.js")
const watchlistRouter = require("./routes/watchlistRoutes.js")
const dotenv = require("dotenv")
const path = require("path")
const cors = require("cors")
const cookieParser = require("cookie-parser")

dotenv.config()

connectDB()
// const storage = multer.diskStorage({
//   destination : (req, file, cb) => {
//     cb(null,"images")
//   },
//   filename : (req, file, cb) => {
//     console.log(file)
//     cb(null,file.originalname)
//   }
// })

// const upload = multer({storage : storage})

// app.post("/uploads",upload.single("image"),(req,res) => {
//   res.json(req)
//   console.log(req.file)
// })


app.use(cors({ origin: ["http://localhost:3000","https://crypto-app-inf1.onrender.com","https://crypto-app-api-irub.onrender.com",], credentials: true }));
app.use(cookieParser());

app.use(express.json());
app.use("/api", userRouter);
app.use("/api", watchlistRouter);

app.use(express.static(path.join(__dirname, ".." ,'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, ".." ,'public', 'index.html'));
});

app.listen(process.env.PORT, () => {
  console.log(`running on ${process.env.PORT}`)
})