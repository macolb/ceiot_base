const express = require("express");
const bodyParser = require("body-parser");
const {MongoClient} = require("mongodb");
const PgMem = require("pg-mem");

const db = PgMem.newDb();

    const render = require("./render.js");
// Measurements database setup and access

let database = null;
const collectionName = "measurements";

async function startDatabase() {
    const uri = "mongodb://localhost:27017/?maxPoolSize=20&w=majority";	
    const connection = await MongoClient.connect(uri, {useNewUrlParser: true});
    database = connection.db();
}

async function getDatabase() {
    if (!database) await startDatabase();
    return database;
}

async function insertMeasurement(message) {
    const {insertedId} = await database.collection(collectionName).insertOne(message);
    return insertedId;
}

async function getMeasurements() {
    return await database.collection(collectionName).find({}).toArray();	
}

// API Server

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('spa/static'));

const PORT = 8080;

app.post('/measurement', function (req, res) {
    console.log("device id    : " + req.body.id + " key         : " + req.body.key + " temperature : " + req.body.t + " humidity    : " + req.body.h);	

    let device_check = (db.public.many("SELECT * FROM devices WHERE device_id = '"+req.body.id+"'")).length;
    //console.log(device_check);    
        
    if(device_check > 0){                                                                                   //Check if the device exist and then take the measurement
        const {insertedId} = insertMeasurement({id:req.body.id, t:req.body.t, h:req.body.h});
	    res.send("received measurement into " +  insertedId);
    } else {
        res.send("received measurement from device not registered!");        
    }
});

app.post('/device', function (req, res) {
	console.log("device id    : " + req.body.id + " name        : " + req.body.n + " key         : " + req.body.k );

    let device_check =(db.public.many("SELECT * FROM devices WHERE device_id = '"+req.body.id+"'")).length;
    //console.log(device_check);

    if(device_check == 0){                                                                                 //Check if the device exist before create a new one 
        const dbdata = db.public.none("INSERT INTO devices VALUES ('"+req.body.id+ "', '"+req.body.n+"', '"+req.body.k+"', CURRENT_TIMESTAMP)");            //Add Timestamp 
	    res.send("received new device");                                                                                                                    //Registration
        //console.log(dbdata);    
    }else {
        res.send("device already registered");   
        //console.log("device already registered");                
    }
});

app.get('/web/measurements', async function (req, res) {                    
    var dataArray = await getMeasurements();                                         //Add user web page
	var measurements = dataArray.map( function(measurement) {
		//console.log(measurament);
		return '<tr><td><a href=/web/measurements/'+ measurement.id +'>' + measurement.id + "</a>" +
			       "</td><td>"+ measurement.t+"</td><td>"+ measurement.h+"</td><td>"+measurement.date+"</td></tr>";         
	   }
	);
	res.send("<html>"+
		     "<head><title>Measurement</title></head>" +
		     "<body>" +
		        "<table border=\"1\">" +
		           "<tr><th>id</th><th>temp</th><th>hum</th><th>date</th></tr>" +                                   //Add timestamp to Sensors table
		           measurements +
		        "</table>" +
		     "</body>" +
		"</html>");
});


app.get('/web/users', function (req, res) {                                                             //Add user web page
	var users = db.public.many("SELECT * FROM users").map( function(user) {
		//console.log(user);
		return '<tr><td><a href=/web/user/'+ user.user_id +'>' + user.user_id + "</a>" +
			       "</td><td>"+ user.name+"</td><td>"+ user.key+"</td><td>"+user.role+"</td></tr>";         
	   }
	);
	res.send("<html>"+
		     "<head><title>Users</title></head>" +
		     "<body>" +
		        "<table border=\"1\">" +
		           "<tr><th>id</th><th>name</th><th>key</th><th>role</th></tr>" +                                   //Add timestamp to Sensors table
		           users +
		        "</table>" +
		     "</body>" +
		"</html>");
});

app.get('/web/device', function (req, res) {
	var devices = db.public.many("SELECT * FROM devices").map( function(device) {
		//console.log(device);
		return '<tr><td><a href=/web/device/'+ device.device_id +'>' + device.device_id + "</a>" +
			       "</td><td>"+ device.name+"</td><td>"+ device.key+"</td><td>"+ device.registration +"</td></tr>";         //Add timestamp registration to Front-end
	   }
	);
	res.send("<html>"+
		     "<head><title>Sensores</title></head>" +
		     "<body>" +
		        "<table border=\"1\">" +
		           "<tr><th>id</th><th>name</th><th>key</th><th>registration</th></tr>" +                                   //Add timestamp to Sensors table
		           devices +
		        "</table>" +
		     "</body>" +
		"</html>");
});

app.get('/web/device/:id', function (req,res) {
    var template = "<html>"+
                     "<head><title>Sensor {{name}}</title></head>" +
                     "<body>" +
		        "<h1>{{ name }}</h1>"+
		        "id  : {{ id }}<br/>" +
		        "Key : {{ key }}" +
                     "</body>" +
                "</html>";


    var device = db.public.many("SELECT * FROM devices WHERE device_id = '"+req.params.id+"'");
    console.log(device);
    res.send(render(template,{id:device[0].device_id, key: device[0].key, name:device[0].name}));
});	

app.get('/term/device/:id', function (req, res) {
    var red = "\33[31m";
    var green = "\33[32m";
    var blue = "\33[33m";
    var reset = "\33[0m";
    var template = "Device name " + red   + "   {{name}}" + reset + "\n" +
		   "       id   " + green + "       {{ id }} " + reset +"\n" +
	           "       key  " + blue  + "  {{ key }}" + reset +"\n";
    var device = db.public.many("SELECT * FROM devices WHERE device_id = '"+req.params.id+"'");
    console.log(device);
    res.send(render(template,{id:device[0].device_id, key: device[0].key, name:device[0].name}));
});

app.get('/measurement', async (req,res) => {
    res.send(await getMeasurements());
});

app.get('/device', function(req,res) {
    res.send( db.public.many("SELECT * FROM devices") );
});

startDatabase().then(async() => {

    const addAdminEndpoint = require("./admin.js");
    addAdminEndpoint(app, render);

    await insertMeasurement({id:'00', t:'18', h:'78', date:new Date()});
    await insertMeasurement({id:'00', t:'19', h:'77', date:new Date()});
    await insertMeasurement({id:'00', t:'17', h:'77', date:new Date()});
    await insertMeasurement({id:'01', t:'17', h:'77', date:new Date()});
    console.log("mongo measurement database Up");

    db.public.none("CREATE TABLE devices (device_id VARCHAR, name VARCHAR, key VARCHAR, registration TIMESTAMP)");
    db.public.none("INSERT INTO devices VALUES ('00', 'Fake Device 00', '123456', CURRENT_TIMESTAMP)");
    db.public.none("INSERT INTO devices VALUES ('01', 'Fake Device 01', '234567', CURRENT_TIMESTAMP)");
    db.public.none("INSERT INTO devices VALUES ('02', 'Fake Device 02', '345678', CURRENT_TIMESTAMP)");


    db.public.none("CREATE TABLE users (user_id VARCHAR, name VARCHAR, key VARCHAR, role VARCHAR)");
    db.public.none("INSERT INTO users VALUES ('1','Ana','hola123','admin')");
    db.public.none("INSERT INTO users VALUES ('2','Beto','pass123','client')");
    db.public.none("INSERT INTO users VALUES ('3','Macol','word345','user')");
	

    console.log("sql device database up");

    app.listen(PORT, () => {
        console.log(`Listening at ${PORT}`);
    });
});
