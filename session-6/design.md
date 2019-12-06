Each connected client has a unique sessionId given by the server

But also these are the fields from each client

Nickname
Color (must be unique): up to 8 can join (8 selectable colors?)
===> Every time someone joins with a chosen color, that color is gone

Assigned some random position and velocity

For every keystroke for movement
-> broadcast to all clients
    color + Command (MOVE-UP, MOVE-DOWN, MOVE-LEFT)
---

Server contains a collection of 8 colors to choose from

When a client joins with a particular color, that color is gone...

How to deploy this on a server??
* Using Heroku
* Now.js?
-> Pusher.com ?
* Zeit, now ???

Or firebase ???

---

We need to "share" a common server to connect and broadcast.

