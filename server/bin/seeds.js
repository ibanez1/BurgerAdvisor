require("dotenv").config();

const mongoose = require('mongoose');
const Burger = require('../models/Burger');
const data = require('./data');

const dbURL = process.env.MONGO_URL;

mongoose.connect(dbURL)
.then(() =>{
    console.log(`Connected to db ${dbURL}`);
    Burger.collection.drop();

    Burger.create(data)
    .then(function (burgers) {
        console.log(burgers)
    })
})
.catch((err) => {
    console.log(err)
})