// var app = require('express')();
// var http = require('http').createServer(app);
// app.get('/', function(req, res){
//   res.send('<h1>Hello Pedro</h1>');
// });

var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

/* ---------- Deliver static assets ------------ */
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/images/:image", function(req, res) {
  res.sendFile(__dirname + "/images/" + req.params.image);
});

app.get("/js/:file", function(req, res) {
  res.sendFile(__dirname + '/js/' + req.params.file);
});

/* ---------- End of Deliver static assets ------------ */

http.listen(3000, function() {
  console.log("listening on *:3000");
});


var numUsers = 0;

io.on("connection", socket => {
  var addedUser = false;

  // when the client emits 'new message', this listens and executes
  socket.on("new message", data => {
    // we tell the client to execute 'new message'
    socket.broadcast.emit("new message", {
      username: socket.username,
      message: data
    });
  });

  // when the client emits 'add user', this listens and executes
  socket.on("add user", username => {
    if (addedUser) return;

    // we store the username in the socket session for this client
    socket.username = username;
    ++numUsers;
    addedUser = true;
    socket.emit("login", {
      numUsers: numUsers
    });
    // echo globally (all clients) that a person has connected
    socket.broadcast.emit("user joined", {
      username: socket.username,
      numUsers: numUsers
    });
  });

  // // when the client emits 'typing', we broadcast it to others
  // socket.on("typing", () => {
  //   socket.broadcast.emit("typing", {
  //     username: socket.username
  //   });
  // });

  // // when the client emits 'stop typing', we broadcast it to others
  // socket.on("stop typing", () => {
  //   socket.broadcast.emit("stop typing", {
  //     username: socket.username
  //   });
  // });

  socket.on("fruit:spawn", data => {
    socket.broadcast.emit("fruit:spawn", {
      username: socket.username,
      data
    });
  });

  socket.on("fruit:munched", data => {
    socket.broadcast.emit("fruit:munched", {
      username: socket.username,
      data
    });
  });

  // when the user disconnects.. perform this
  socket.on("disconnect", () => {
    if (addedUser) {
      --numUsers;

      // echo globally that this client has left
      socket.broadcast.emit("user left", {
        username: socket.username,
        numUsers: numUsers
      });
    }
  });
});
