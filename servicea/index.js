// checklist
const express = require('express')

const app = express()

app.use(express.json())

app.get('/homeowner/:id', (req, res) => {
    return res.json({ HomeOwner: req.params.id, from: 'checklist' })
})

app.get('/homeowner/GetSingleWithProperty', (req, res) => {
    return res.json({ GetSingleWithProperty: 1, from: 'checklist' })
})

app.get('/homeowner/ExistsByFullUser', (req, res) => {
    return res.json({ ExistsByFullUser: 1, from: 'checklist' })
})

app.get('/homeowner/UserExists', (req, res) => {
    return res.json({ UserExists: 1, from: 'checklist' })
})

app.get('/homeowner/UpdateUserEmail', (req, res) => {
    return res.json({ UpdateUserEmail: 1, from: 'checklist' })
})


app.listen(4000, () => {
    console.log("App running on port 4000")
})