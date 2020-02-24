# The Graduate Project.
<br>

## 🎓Grads - By Darius Rain.

## About project:
Create a full stack application using Express Mongoose Pug and Nodejs. <br>
This application will be used to display a users job history & education information to companies <br>
who may be searching to fill a certain job title. (Sounds a little like Linkedin 🤣) <br>
I want to make this application to have a simpler method than Linkedin, in order to find potential employees. 
So A company can just simply search and find who they are looking for <br>
similar to a google search rather than having a social media aspect compared to Linkedin. <br>

&nbsp;

### [✔] Installation & set up of express mongoose and pug.
<pre>
    [+] (npm init -y) 
    
    [+] Install Express (npm i express).
    
    [+] Install  Mongoose (npm i mongoose).
    
    [+] Install pug (npm i pug).
    
    [+] Create a server.js, app.js or index.js file (code server.js or touch server.js).
    
    [+] Create a public directory (mkdir public).
    
    [+] Add a views directory in the public directory (mkdir public/views).
    
    [+] Create a routes directory (mkdir routes).
    
    [+] Create a models directory (mkdir models).
    
    [+] Go back to server.js (Open in vscode if you used touch command then open in editor of choice). 
</pre>
&nbsp;

### [✔] Import & basic setup of express, mongoose, pug and enviroment variables.
<pre>
    [+] Import express from node_modules (Ctrl+f -> #1 in <a href="https://github.com/DariusRain/Grads/blob/master/grads/server.js">server.js </a> )).
    
    [+] Import mongoose from node_modules (Ctrl+f -> #2 in server.js).
    
    [+] Create an instance of an express application (Ctrl+f -> #3 in server.js).
    
    [+] Import the path nodejs core module (Ctrl+f -> #4 in server.js).
    
    [+] Set the view engine for express to pug (Ctrl+f -> #5 in server.js).
</pre>
&nbsp;    

### [✔] Setup routes for the server.js file (Express).
<pre>
    [+] Create a home route (code or touch routes/home.js).
    
    [+] Write to home.js and create an instance of an express router to be exported (Ctrl+f -> #1 in 
    <a href="#">routes/home.js</a> ).
    
    [+] Export that router to be used in any file (Ctrl+f -> #2 in home.js).
    
    [+] Then import and use that router as middleware in the server.js file (Ctrl+f -> #1 in <a href="https://github.com/DariusRain/Grads/blob/master/grads/server.js">server.js</a> ).
</pre>
&nbsp;

### [✔] Create a mongoose schema for graduates (Mongoose).
<pre>
    [+] Create graduate.js file in the models directory  (touch or code models/graduate.js).
    
    [+] Import mongoose and use mongoose.Schema() syntax to make a schema (Ctrl+f -> #1 in <a href="#">models/graduate.js</a> ).
    
    [+] Export the schema with the mognoose.model() syntax. (Ctrl+f -> #2 in models/grafuate.js). 
    
    [+] Import it into routes/home.js (Ctrl+f -> #3 in <a href="#">routes/home.js</a> )). 
</pre>
&nbsp;

### [✔] Set up views for the frontend (Pug).
<pre>
    [+] Create a index.pug  (touch or code public/views/index.pug).
    
    [+] Create a layout for the application in that file (See <a href="#">public/views/index.pug</a> ).
</pre>
&nbsp;

### [✔] Add Stylesheet and JavaScript files in the public directory (Import it into index.pug).
<pre>
    [+] Add a script.js and stylesheet.css file in public directory (touch or code public/script.js 
    & public/stylesheet.css).
    
    [+] (See <a href="#">public/script.js</a> & <a href="#">public/stylesheet.css</a> )
</pre>
&nbsp;
