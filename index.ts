import dotenv from 'dotenv'

dotenv.config()
import  express, { Application } from 'express'
import cors from 'cors'


const app:Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//404 route handler
app.all('*',(req,res) => {
    res.status(404).send({
        msg:"route does not exist"
    })
})


//start the server

const PORT = process.env.PORT || 8080

app.listen(PORT,() =>{
    console.log(`listening on port ${PORT}`)
})
