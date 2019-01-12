const express = require('express')
const app = express()
const port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/client'));

// set the home page route
// app.get('/', function(req, res) {
//     // ejs render automatically looks in the views folder
//     res.render('music');
// });

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
