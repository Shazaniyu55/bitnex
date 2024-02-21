import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from  './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import cookieParser from 'cookie-parser';
import cors from 'cors'

dotenv.config()


const app = express();
const PORT = process.env.PORT|| 2600;


//this will connect to the mongodb
mongoose.connect("mongodb+srv://shazaniyu:shazaniyu@mern-estate.0k8jh0d.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('MONGODB Connected')
})
.catch((err)=>{
    console.log(err)
})

app.use(cors())
app.use(express.json())
app.use(cookieParser())


app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
//this is the
app.get('', (req, res)=>{

    res.json('welcome to bitnex backend')
})


app.listen(PORT, ()=>{
    console.log(`SERVER RUNNING AT PORT ${PORT}`)
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });