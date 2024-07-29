
/**
 * step: 01 ---> create a server
 * we need to go to site called 
 * 'expressjs.com' 
 * use commands 
 *  a. npm install express --save  (switch save not needed)
 *  b. npm i @types/express --save-dev   (for import the 'express' in index.ts)
 *  c. 'npm i @types/node --save-dev' this provies 'types' for node
 * 
 *  d. compile the code in this file by command below (to generae 'index.js' that is compiled version):
 *     'tsc' 
 *  e. start the server by this:
 *     'node index.js'
 *  f. stop the server by pressing 'control + c' ()
 * 
 **/ 
import express from 'express';

// create server
const app = express();

// add middleware to be able to read request being sent by 'POST' method
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// creae 'home' route
app.post('/', (request, response) => {
    console.log(request.body)
    response.json({"message" : "Hi from MyServerApp"})
});

// listen to the port
const PORT = 8000
app.listen(PORT, () => {
    console.log("server is listening at port: " + PORT)
});
