const express = require("express");
const app = express();
const port = 8080;
const fs = require("fs");

app.listen(port,() =>{
console.log("server started on", port);
});

app.use(express.json());

// let studentDetails = {};

app.post("/student/add",(req, res) => {
console.log("request", );
fs.writeFile("studentDetails.json", JSON.stringify(req.body), err => {
     
    // Checking for errors
    if (err) throw err; 
   
    console.log("Done writing"); // Success
    res.status(200).send({"result":"succcess"});
 });
});

app.get("/student/getDetails",(req, res) => {
    fs.readFile("studentDetails.json", (err, data) => {
      
        // Check for errors
        if (err) throw err;
       
        // Converting to JSON
        const studentDetails = JSON.parse(data);
          
        console.log(studentDetails); // Print users 
        res.status(200).send(studentDetails);
    });
 });