require('dotenv').config({ path: '.env' });
const cors = require('cors')
const express = require('express')
const dbo = require('./src/database/conn');
const PORT = process.env.PORT || 5000;
const app = express()



app.use(cors())
app.use(express.json());
app.use(require('./src/routes/inscricoes'));
app.use(express.static('../public'))

// perform a database connection when the server starts
dbo.connectToServer(function (err) {
    if (err) {
      console.error(err);
      process.exit();
    }
  
    // start the Express server
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  });