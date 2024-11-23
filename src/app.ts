
import express from 'express' 
import cors from 'cors'
import { productRouter } from './app/modules/Product/product.routes'
import { OrderRouter } from './app/modules/Order/order.routes'

const app = express()

// parser 

app.use(express.json())
app.use(cors())

// application routes 


app.use("/api/products",productRouter)
app.use("/api/orders",OrderRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})



export default app