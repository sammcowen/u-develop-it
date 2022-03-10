const db = require('./db/connection');
const inputCheck = require('./utils/inputCheck');

const express = require('express');
const res = require('express/lib/response');
const apiRoutes = require('./routes/apiRoutes');



const PORT = process.env.PORT || 3001;

const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', apiRoutes);


  
  
    // default response for any other request 
 
    app.use((req, res) => {
        res.status(404).end();
    });
    // Start server after db connection 
    db.connect(err => {
      if(err) throw err;
      console.log('database connected');
    })
    app.listen(PORT, () => {
        console.log(`Running on port ${PORT} `);

    });
