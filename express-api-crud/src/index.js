require('./connection');
const emp = require('./employees');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const URL = 3000;
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.listen(URL, ()=>{
    console.log(`Server is running on http://localhost:${URL}`);
});

app.post('/addemployee', (req, res) =>{
    emp.create(req.body).then((data)=>{
        res.send(data);
    })
});

app.get('/employees', (req, res)=>{
    emp.find().then((data)=>{
        res.send(data);
    });
})

app.delete('/deleteemployee/:id', (req, res)=>{
    emp.findByIdAndDelete(req.params.id).then((data)=>{
        res.send(data);
    });
})

app.put('/updateemployee/:id', (req, res)=>{
    emp.findByIdAndUpdate(req.params.id, req.body).then((data)=>{
        res.send(data);
    });
});