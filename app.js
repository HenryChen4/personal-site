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

app.get('/community', (req, res)=>{
    res.render('community')
})

app.get('/projects', (req, res)=>{
    res.render('projects')
})

app.get('/contact', (req, res)=>{
    res.render('contact')
})

app.listen(port, ()=>{
    console.log(`listening on port: ${port}`)
})