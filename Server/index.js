const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const indexOfRoute = require('./routes');
const authRoute = require('./routes/authRoute');
const verifyEmailRoute = require('./routes/verifyEmailRoute');
const dashboardRoute = require('./routes/dashboardRoute');
const productRoute = require('./routes/productRoute');
const sellerRoute = require('./routes/sellerRoute');
const path = require('path');

const dotenv = require('dotenv');

dotenv.config();

const app = express();
/* const corsOptions = {
    origin: 'http://localhost:3000',
    credentials:true,
    optionSuccessStatus: 200
} */
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(indexOfRoute);
app.use(authRoute);
app.use(verifyEmailRoute);
app.use(dashboardRoute);
app.use(productRoute);
app.use(sellerRoute);


app.use(express.static('Images'));
app.use('/images', express.static(path.join(__dirname, 'images')))


//app.use((err, req, res, next) => {  if (err.message) {    res.status(401).json({"error" : err.name + ": " + err.message})  }})



app.get('/', (req, res) => {
    res.send('Welcome')
    
})

app.get('/contact', (req, res) => {
    res.send('Welcome')
    
})






app.listen("3000", () => {console.log('Listening on port 3000...')});


