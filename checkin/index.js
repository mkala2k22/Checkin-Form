const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();

app.use(cors()); 
app.use(bodyparser.json());
let bookingData = JSON.parse(fs.readFileSync('./data/bookingId.json'));


//Create server with port
app.listen(3000, () => {
    console.log('server is running on  port 3000...');
});


// post call for user checkin
app.get('/checkin',(req,res)=>{
        res.status(200).json({
            status : "Success",
            message : "Successful Checkin",
            data : {
                bookingData : bookingData
            }
        });
}); 


app.all('*', (req, res, next) => {
    const err = new Error('Page not found');
    err.status = "Fail";
    err.statusCode = 404;
    next(err);
});


app.use((error, req, res, next) => {
    error.statusCode = error.statusCode || 500;
    error.status = error.status || 'error';
    res.status(error.statusCode).json({
        status: error.status,
        message : error.message
    });
});






