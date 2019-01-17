# socketio-with-pgnotify
Fetching real time data from database. I have implemented a simple real time application using socket-io (NodeJS) with pg_notify (Postgresql)

Perform the following tasks:
-----------------------------
1-Download all file.

2-Setup database (I have included a database backup file, use that file to setup database).

3-make a directory named myapp
  then, copy & paste all downloaded files
  (index.html, server.js,package.json and package-lock.json)
  
4-Use command prompt
  npm install (To install packages)
  
  To run the code:-
  node server.js
  
  Now, you can see a message in your command prompt:
  "listening on *:3000"

5-Enter the given url in your browser:
  localhost:3000
  
6-Insert a row into database:
  INSERT INTO public.status(id, status, is_seen) VALUES (100, 'm', TRUE);
  
  Then you should get real time response at client side.
  The clent side display will be like:
  
  real time data recieved from server
  When you insert a new row into database, the below p tag content will be changed
  {"data" : {"id":100,"status":"m","is_seen":true}}
