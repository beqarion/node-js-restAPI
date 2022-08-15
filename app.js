const express = require("express")
const mongoose = require("mongoose")

const feedRoutes = require("./routes/feed")

const app = express()

app.use(express.urlencoded({ extended: true })) //x-www-form-urlencoded <form>
app.use(express.json()) //application/json

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")
  next()
})

app.use("/feed", feedRoutes)

mongoose
  .connect(
    "mongodb+srv://beqarioni:sheyiladzee@cluster0.qmkq6.mongodb.net/messages?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(8080)
  })
  .catch((err) => console.log(err))
