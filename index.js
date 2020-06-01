// import express
const express = require('express')

// create a server
const server = express()

//middleware - to teach express new tricks
server.use( express.json() ) //how to parse JSON from the body

let hubs = [
     {
          id: 1,
          name: 'building apis with express',
     },
     {
          id: 2,
          name: 'server routing with express'
     },
]

let lessons = [
     {
          id: 101,
          name: `practice writing json`
     },
     {
          id: 103,
          name: `intro to express`
     }
]

// a function to handle GET requests to '/'

server.get(`/`, (req, res) => {
     res.send(`Hello web 30`)
})

//hubs
server.get('/hubs', function(req, res){
     res.status(200).json(hubs)
})

server.post('/hubs', function(req, res) {
     const hub = req.body

     hubs.push(hub)

     res.status(201).json(hubs)
})

server.delete('/hubs/:id', function(req, res) {
     const id = req.params.id

     hubs = hubs.filter(h => h.id !== Number(id))

     res.status(200).json(hubs)
})


//lessons
server.get(`/lessons`, (req, res) => {
     res.status(200).json(lessons)
})

server.post(`/lessons`, (req, res) => {
     const lesson = req.body
     lessons.push(lesson)
     res.status(201).json(lessons)
})

server.delete(`/lessons/:id`, (req, res) => {
     const id = req.params.id
     lessons = lessons.filter(lesson => lesson.id !== Number(id))
     res.status(200).json(lessons)
})

// listen for incoming requests
const port = 8000

server.listen(port, () => console.log(`\n  == API running on port ${port} == \n`))