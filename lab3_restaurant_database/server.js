const express = require('express');
const mongoose = require('mongoose');
const restaurantRoutes = require('./routes/restaurant_routes.js');



const app = express();
app.use(express.json()); 

mongoose.connect('mongodb+srv://ArghawanS:Aash7jeBbqzvs6dp@cluster0.khfigyk.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true


}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log('Error Mongodb connection')
});



app.use(restaurantRoutes);


app.listen(5001, () => { console.log(`Server is running at http://localhost:${5001}`) });