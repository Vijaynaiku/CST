function myFunction() {
    var x = document.getElementById("show");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  const express        = require('express')
  const mongoose       = require('mongoose')
  const mongan         = require('morgan')
  const bodyParser     = require('body-parser')

  mongoose.connect('mongodb://localhost:27017/testdb',{userNewUrlParser: true , useUnifiedTopology: true})
  const db = mongoose.connect

  db.on('error', (err) => {
    console.log(err)

  })

  db.once('open', () => {
    console.log('Database Connection Established!')
  }) 

  const app = express()

  app.use(mongan('dev'))
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())

  const PORT = process.env.PORT || 3000

  app.listen(PORT, () => {
      console.log('Server is running on port ${PORT}')  
  })