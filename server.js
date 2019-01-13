const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Routes
// ************************************************************
var routesHtml = require("./app/routes/htmlRoutes.js")(app);
var routesApi = require("./app/routes/apiRoutes.js")(app);

// Run Server
// ************************************************************
app.listen(PORT, function() {
 console.log("App listening on PORT " + PORT);
});


