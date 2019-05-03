var express = require('express')

var port = process.env.PORT || 8080
var app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./app/routing/htmlRouts')(app)
require('./app/routing/apiRoutes')(app)

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
