const mongoose = require('mongoose');
const port = 3000
const app = require('./app');
//mongoose.connect('mongodb://localhost/testaroo', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => {
    console.log("Database Connected Succesfully");
}).catch(err => {
    console.log(err.message);
})
// mongoose.connection.once('open', () =>{
//     console.log('connection established')
// }).on('connectionError',(err) =>{
//     console.log(err);
// })

app.listen(port, () => console.log(`App listening on port ${port}!`));
