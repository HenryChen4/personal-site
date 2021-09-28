const express = require("express")
const path = require("path")
const hbs = require("hbs")

const app = express()
const publicPath = path.join(__dirname + "/public")
const viewsPath = path.join(__dirname + "/public/views")
const partialPath = path.join(__dirname + '/public/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
app.use(express.static(publicPath))
hbs.registerPartials(partialPath)

const port = process.env.PORT || 8080

app.get('/', (req, res)=>{
    res.render('index')
})

app.listen(port, ()=>{
    console.log(`listening on port: ${port}`)
})