import express from 'express'
const app = express()
const port = 3000

app.get('/', (req:unknown, res:{send:(msg:string)=>void}) => {
    res.send('Hello World!')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})