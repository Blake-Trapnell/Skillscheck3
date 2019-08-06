require('dotenv').config()
const express = require('express')
const massive = require('massive')
const invCtrl = require('./inventoryController')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const PORT = SERVER_PORT || 9000
const app = express()

app.use(express.json())

app.get(`/api/houses`, invCtrl.getAllHomes)
app.delete(`/api/houses/:id`, invCtrl.deleteById)
app.post(`/api/houses`, invCtrl.add)
app.post(`/auth/houses`, invCtrl.alterColumn)


massive(CONNECTION_STRING).then(db => {
    app.set ('db',db)
    app.listen(PORT, ()=> console.log(`i have ${PORT} problems, but you ain't one of them`))
}).catch(error => console.log('error connection to Db', error))