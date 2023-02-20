import express  from "express";
import bodyparser from "body-parser";
import morgan from "morgan";
import welcomeRouter from "./src/routers/welcome.js";
import userRouter from "./src/routers/user.js";

const app = express();

// Config 
app.use(morgan("dev"));
app.use(bodyparser.urlencoded({ extended : false}))
app.use(bodyparser.json())

// Routers
app.use("/welcome",welcomeRouter);
app.use("/user",userRouter);


// Handle Error
app.use((req,res,next) =>{
  const error = new Error('Nothing Here')
  error.status = 404;
  next(error)
});

app.use((error,req,res,next)=>{
  res.status(error.status || 500)
  return res.send({
    error : {
      message: error.message
    }
  })
});


export default app;