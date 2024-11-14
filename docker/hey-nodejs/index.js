const express = require("express");

const app =express()
const PORT = 3021;

app.get("/", (req, res)=>{
  res.send("Hello, World!")
})


app.listen(PORT, ()=>{
  console.log(`App is starting on http://localhost:${PORT}`)
})