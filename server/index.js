

// libs
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const responseGen = require('./even-responses')();

const app = express();

app.use(cors());
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
const router = express.Router();

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/even', (req, res) => responseGen.next().value
    .then((responseData) => res.status(200).json(responseData))
    .catch((errorData) => res.status(500).json(errorData)));

app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
