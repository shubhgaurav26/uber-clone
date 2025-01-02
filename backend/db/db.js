// const mongoose = require ('mongoose');


// function connectToDB(){
//     mongoose.connect(process.env.DB_CONNECT).then(()=>{
//         console.log('Connect to DB');})

// .catch(err => console.log(err));
     
// }

// module.exports = connectToDB; 


const mongoose = require('mongoose');

function connectToDB() {
    mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1); // Exit the process if the database connection fails
    });
}

module.exports = connectToDB;
