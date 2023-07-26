import express from 'express';
import routerBook from './routers/book'
const app = express();
const PORT = 4000
app.use(express.json())

app.use('/book',routerBook)

app.listen(PORT,()=>{
    console.log(`server running on port: ${PORT}`)
})