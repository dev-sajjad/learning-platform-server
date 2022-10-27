const express = require('express')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())

const categories = require('./data/course-categories.json')
const courses = require('./data/course-details.json')

app.get('/', (req, res) => {
    res.send('Learner edge server is runnning.')
})

app.get('/course-categories', (req, res) => {
    res.send(categories)
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find(c => c.course_id === id)
    res.send(course)
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})