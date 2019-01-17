//-----------------Dependencies------------------
var app     =     require("express")();
var pgsql   =     require("pg");
var http    =     require('http').Server(app);
var io      =     require("socket.io")(http);
//------------------------------------------------

const con = new pgsql.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'fbstatus',
    password: 'postgres',
    port: '5432'
});

app.get("/",function(req,res){
    res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

// Connect to Postgres
con.connect(function(err, client) {
  if(err) {
    console.log(err);
  }

  io.sockets.on('connection', function (socket) {

    // Listen for all pg_notify channel messages
    client.on('notification', function(msg) {
      console.log(msg);
      socket.emit('update', msg);
    });
  
    // Designate which channels we are listening on. Add additional channels with multiple lines.
    client.query('LISTEN notification_events');
  });
});