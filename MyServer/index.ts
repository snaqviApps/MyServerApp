
/**
 * step: 01 ---> create a server
 * we need to go to site called 
 * 'expressjs.com' 
 * use commands 
 *  a. npm install express --save  (switch save not needed)
 *  b. npm i @types/express --save-dev   (for import the 'express' in index.ts)
 *  c. 'npm i @types/node --save-dev' this provies 'types' for node
 * 
 *  d. compile the code in this file by command (to generae 'index.js' that is compiled version):
 *     'tsc' 
 *  e. start the server by this:
 *     'node index.js'
 *  f. stop the server by pressing 'control + c' ()
 *
 * */ 

import express from 'express'

// create server
const app = express();

// creae 'home' route
app.get('/', (req, res) => {
        res.send('<h1>Hi from React-Native</h1>')
});

// listen to the port
const PORT = 8000
app.listen(PORT, () => {
    console.log("server is listening at port: " + PORT)
});
