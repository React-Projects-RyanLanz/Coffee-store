import express, { Application } from 'express';
import { PrismaClient } from '@prisma/client';
import produtctRouter from './routes/productRoute';
import userRouter from './routes/userRoute';
import orderRoute from './routes/orderRoute';
import cors from 'cors'

const app:Application = express()
const PORT:number = 3000

app.use(express.json())
app.use(cors())

//ROTAS PRODUCT
app.use('/product',produtctRouter) 

//ROTAS USER
app.use('/user',userRouter) 

//ROTAS ORDER
app.use('/order',orderRoute) 

app.listen(PORT, () => {
    console.log('penis')
})