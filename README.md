
 # The Graduate Project.
<br>

# 🎓Grads

 ## About project:
Create a full stack application using Express Mongoose Pug and Nodejs. <br>
This application will be used to display a users job history & education information to companies <br>
who may be searching to fill a certain job title. (Sounds a little like Linkedin 🤣) <br>
I want to make this application to have a simpler method than Linkedin, in order to find potential employees. 
So A company can just simply search and find who they are looking for <br>
similar to a google search rather than having a social media aspect compared to Linkedin. <br>

&nbsp;


 ## [✔] Installation & set up of express mongoose and pug.
<pre>
    [+] Initialize a package.json file 
        // Command
        // npm init -y 
    
    [+] Install Express 
        // Command 
        // npm i express
    
    [+] Install  Mongoose 
        // Command
        // npm i mongoose
    
    [+] Install pug
        // Command 
        // npm i pug
    
    [+] Create a server.js, app.js or index.js file (Main server file)
        // Commands
        // Visual Studio Code: code server.js 
        // touch server.js -> Then open in editor
    
    [+] Create a public directory (Static files) 
        //Command
        // mkdir public
    
    [+] Create a views directory (for pug files) 
        // Command 
        // mkdir views

    [+] Create a routes directory 
        // Command
        // mkdir routes
    
    [+] Create a models directory (mkdir models).
        // Commmand
        // mkdir models

    [+] Open server.js 
</pre>
&nbsp;


 ## [✔] Import & basic setup of express, mongoose, pug and enviroment variables in server.js file.
<pre>
    [+] Import express from node_modules 
        // See #1 in <a href="https://github.com/DariusRain/Grads/blob/master/grads/server.js">server.js </a>
    
    [+] Import mongoose from node_modules 
        // See #2 in server.js
    
    [+] Create an instance of an express application 
        // See #3 in server.js

    [+] Import the path core module 
        // See #4 in server.js
    
    [+] Set the view engine for express to pug 
        // See #5 in server.js

    [+] Set the express view-engine to pug
        // See #6 in server.js
    
    [+] Use the express.static() for the public directory.
        // See #7 in server.js

    [+] Create a bash script outside of the project that will 
    be a tool to set enviroment variables in any project you may work on. 
        // Commands 
        // nano ../bash/set_enviroment_development.sh
        <code>
            #!/bin/bash
            export DB=yourDatabaseConnectionStringHere
            export PORT=setPort
            export NODE_ENV=development
            echo 'Set the enviroment to development'
        </code>
        // Ctrl + s (Save) 
        // Ctrl + x (Exit)
        // . ../bash/set_enviroment_development.sh (The '.' states the current directory you are in & the path to the bash script you want to execute)
        // Should see message from the script that it is set to a specific enviroment.

    [+] Now assign the enviroment variables value using 'process.env'
        // See #8 in server.js

</pre>
&nbsp;    


 ## [✔] Setup routes and middlewares required for the server.js file (Express).
<pre>
    [+] Create a home route 
        // Commands
        // Visual Studio Code: code routes/home_route.js
        // touch routes/home_route.j
    
    [+] Write to 'home_route.js' and create an instance of an express router to be exported 
        // See #1 in <a href="https://github.com/DariusRain/Grads/blob/master/grads/routes/home_route.js">routes/home_route.js</a>
    
    [+] Export that router, then now available for import in any nodejs file. 
        // See #2 in home_route.js

    [+] Then import and use that router as middleware in the server.js file 
        // See #9 & #10 in <a href="https://github.com/DariusRain/Grads/blob/master/grads/server.js">server.js</a>

    [+] Use built-in express middleware called express.json() so incoming requests can be parsed for interpretation.
        // See #11 in server.js 
</pre>
&nbsp;


 ## [✔] Create a mongoose schema for graduates (Mongoose).
<pre>
    [+] Create graduate.js file in the models directory
        // Commands  
        // Visusal Studio Code: code models/graduate.js
        // touch models/graduate.js (Then open it)
    
    [+] Import mongoose and use mongoose.Schema() syntax to make a schema 
        // See #1 in <a href="https://github.com/DariusRain/Grads/blob/master/grads/models/graduate.js">models/graduate.js</a>
    
    [+] Export the schema with the mognoose.model() syntax 
        // See #2 in models/graduate.js
    
    [+] Import the model in routes/home.js 
        // See #3 in <a href="https://github.com/DariusRain/Grads/blob/master/grads/routes/home_route.js">routes/home_route.js</a> 
</pre>
&nbsp;


 ## [✔] Set up views for the frontend (Pug).
<pre>
    [+] Create a index.pug file 
        //Commands
        // touch or code views/index.pug).
    
    [+] Create a graduate.pug file
        // Commands 
        // touch or code views/graduate.pug
    
    [+] Create a errors.pug file
        //Commads
        // touch or code views/errors.pug

    [+] See <a href="https://github.com/DariusRain/Grads/blob/master/grads/views">views/</a>
</pre>
&nbsp;



 ## [✔] Add Stylesheet and JavaScript files in the public directory (Import it into index.pug).
<pre>
    [+] Add a script.js and stylesheet.css file in public directory (touch or code public/script.js & public/stylesheet.css).
    
    [+] See <a href="https://github.com/DariusRain/Grads/blob/master/grads/public/index.js">public/script.js</a> & <a href="https://github.com/DariusRain/Grads/blob/master/grads/public/styles.css">public/stylesheet.css</a> )
</pre>
&nbsp;