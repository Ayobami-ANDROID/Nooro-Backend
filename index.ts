import dotenv from 'dotenv'

dotenv.config()
import  express, { Application } from 'express'
import cors from 'cors'
import { 
    errorHandler, 
    notFoundHandler 
  } from './middleware/errorMiddleware';
import todoRoutes from './routes/todoRoute';


const app:Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.use('/tasks', todoRoutes);



app.use('*', notFoundHandler);

// Global error handler (must be last)
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  errorHandler(err, req, res, next);
});


//start the server

const PORT = process.env.PORT || 3002

app.listen(PORT,() =>{
    console.log(`listening on port ${PORT}`)
})
