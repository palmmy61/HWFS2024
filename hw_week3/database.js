const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.post("/students", async (req, res) => {
    // ส่งข้อมูลผ่าน body-parser (Middleware)
    const name = req.body.name;
    const age = req.body.age;
    const phone = req.body.phone;
    const email = req.body.email;
 
    const connection = await dbConn
    const rows = await connection.query("insert into students (name,age,phone,email) values('"+name+"','"+age+"',"+phone+",'"+email+"')")
    res.status(201).send(rows)
 })
 
 
 app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
 });
 