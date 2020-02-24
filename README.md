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
    [+] (npm init -y) 
<br>
    [+] Install Express (npm i express).
<br>
    [+] Install  Mongoose (npm i mongoose).
<br>
    [+] Install pug (npm i pug).
<br>
    [+] Create a server.js, app.js or index.js file (code server.js or touch server.js).
<br>
    [+] Create a public directory (mkdir public).
<br>
    [+] Add a views directory in the public directory (mkdir public/views).
<br>
    [+] Create a routes directory (mkdir routes).
<br>
    [+] Create a models directory (mkdir models).
<br>
    [+] Go back to server.js (Open in vscode if you used touch command then open in editor of choice). 
<br>

&nbsp;

### [✔] Import & basic setup of express, mongoose, pug and enviroment variables.
    [+] Import express from node_modules (Ctrl+f -> #1 in <a href="#">server.js</a> )).
<br>
    [+] Import mongoose from node_modules (Ctrl+f -> #2 in server.js).
<br>
    [+] Create an instance of an express application (Ctrl+f -> #3 in server.js).
<br>
    [+] Import the path nodejs core module (Ctrl+f -> #4 in server.js).
<br>
    [+] Set the view engine for express to pug (Ctrl+f -> #5 in server.js).
<br>

&nbsp;    

### [✔] Setup routes for the server.js file (Express).
<br>
    [+] Create a home route (code or touch routes/home.js).
<br>   
    [+] Write to home.js and create an instance of an express router to be exported (Ctrl+f -> #1 in <a href="#">routes/home.js</a> ).
<br>
    [+] Export that router to be used in any file (Ctrl+f -> #2 in home.js).
<br>
    [+] Then import and use that router as middleware in the server.js file (Ctrl+f -> #1 in <a href="#">server.js</a> ).
<br>

&nbsp;

### [✔] Create a mongoose schema for graduates (Mongoose).
<br>    
    [+] Create graduate.js file in the models directory  (touch or code models/graduate.js).
<br>
    [+] Import mongoose and use mongoose.Schema() syntax to make a schema (Ctrl+f -> #1 in <a href="#">models/graduate.js</a> ).
<br>
    [+] Export the schema with the mognoose.model() syntax. (Ctrl+f -> #2 in models/grafuate.js). 
<br>
    [+] Import it into routes/home.js (Ctrl+f -> #3 in <a href="#">routes/home.js</a> )). 
<br>

&nbsp;

### [✔] Set up views for the frontend (Pug).
<br>
    [+] Create a index.pug  (touch or code public/views/index.pug).
<br>
    [+] Create a layout for the application in that file (See <a href="#">public/views/index.pug</a> ).
<br>

&nbsp;

### [✔] Add Stylesheet and JavaScript files in the public directory (Import it into index.pug).
<br>
    [+] Add a script.js and stylesheet.css file in public directory (touch or code public/script.js & public/stylesheet.css).
<br>
    [+] (See <a href="#">public/script.js</a> & <a href="#">public/stylesheet.css</a> )
<br>
&nbsp;