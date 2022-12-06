import express from "express";
import cors from "cors"
import authRouter from "../backend/routes/auth.js"
import userRouter from "../backend/routes/users.js"
import postRouter from "../backend/routes/posts.js"
import cookieParser from "cookie-parser";
import multer from "multer";

const app = express();
app.use(cors());

app.use(express.json());
app.use(cookieParser());

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '../client/public/upload')
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})


const upload = multer({storage})

app.post('/api/upload', upload.single('file'), function (req, res) {
    const file = req.file;
    res.status(200).json(file.filename)
})


app.use("/api/auth", authRouter)
app.use("/api/users", userRouter)
app.use("/api/posts", postRouter)

app.get("/test", (req, res)=>{
    res.json("it works")
})

app.listen(8800, ()=>{
    console.log("Connected")
})