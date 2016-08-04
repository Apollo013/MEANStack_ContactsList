/*---------------------------------------------------------------------
Reference require modules
---------------------------------------------------------------------*/
var express = require('express');
var mongojs = require('mongojs');
var bodyParser = require('body-parser');

var app = express();
var db = mongojs('contactdb', ['contactdb']);


/*---------------------------------------------------------------------
Tell express where to find static files
---------------------------------------------------------------------*/
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/app"));
app.use(bodyParser.json());


/*---------------------------------------------------------------------
Controllers / Routers
---------------------------------------------------------------------*/
app.get('/contactlist', function (req, res) {
    db.contactdb.find(function (err, docs) {
        res.json(docs);
    });
});

app.post('/contactlist', function (req, res) {
    db.contactdb.insert(req.body, function (err, doc) {
        res.json(doc);
    });
});

app.delete('/contactlist/:id', function (req, res) {
    var id = req.params.id;
    db.contactdb.remove({ _id: mongojs.ObjectId(id) }, function (err, doc) {
        res.json(doc);
    })
});

app.put('/contactlist/:id', function (req, res) {
    var id = req.params.id;
    var c = req.body;
    db.contactdb.findAndModify(
        {
            query: { _id: mongojs.ObjectId(id) },
            update: { $set: { name: c.name, email: c.email, number: c.number } },
            new: true
        },
        function(err, doc){
            res.json(doc);
        }
    );
});

app.get('/contactlist/:id', function (req, res) {
    var id = req.params.id;
    db.contactdb.findOne({ _id: mongojs.ObjectId(id) }, function (err, doc) {
        res.json(doc);
    });
});

/*---------------------------------------------------------------------
Start NodeJS & tell it what port to listen to & inform user when done
---------------------------------------------------------------------*/
app.listen('3000');
console.log('Server running on port: 3000');