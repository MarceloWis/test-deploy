// pms
const express = require('express')

const app = express()

app.use(express.json())

app.get('/Booking/:id', (req, res) => {
    return res.json({ Booking: req.params.id, from: 'pms' })
})

app.get('/Booking/GetAllFromDateRange', (req, res) => {
    return res.json({ GetAllFromDateRange: 1, from: 'pms' })
})

app.get('/Booking/GetAllWithoutPagination', (req, res) => {
    return res.json({ ExistsByFullUser: 1, from: 'pms' })
})

app.get('/Booking/GetLast', (req, res) => {
    return res.json({ UserExists: 1, from: 'pms' })
})



app.listen(4001, () => {
    console.log("App running on port 4001")
})