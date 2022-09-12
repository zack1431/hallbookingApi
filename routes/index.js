var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile('data/rooms.json','utf-8',function(err,data){
    if(err) throw err;
    var obj = []
    obj = JSON.parse(data);

    res.json((obj))
  })
});

router.get('/customer', function(req, res, next) {
  fs.readFile('data/rooms.json','utf-8',function(err,data){
    if(err) throw err;
    // console.log(JSON.parse(data))
    var obj = [],temp = [];
    obj = JSON.parse(data);
    obj.forEach(val =>{
      var reqObj = {
        "name": val.name,
        "room_name": val.room_name,
        "date": val.date,
        "start_time": val.start_time,
        "end_time": val.end_time,
      }
      temp.push(reqObj);
    })
    res.json((temp))
  })
});

async function getCustomer(){
  var obj = []
  
}

router.post('/add/:id', function(req, res, next) {
  var read_customer = [];
  fs.readFile('data/customer.json','utf-8', async function(err,data){
    if(err) throw err;
    // console.log(JSON.parse(data))
    read_customer =  JSON.parse(data);
  fs.readFile('data/rooms.json','utf-8',function(err,data){
    if(err) throw err;
    var obj = []
    obj = JSON.parse(data);
    var tempCust = read_customer.filter((resp) =>{
      return resp.id == req.params.id
    })
    var temp = obj.filter((resp) => resp.id == req.params.id )
    if(tempCust.length > 0 && temp.length === 0){
      var reqObj = {
        "id":req.params.id,
        "name":req.body.name,
        "room_name":tempCust[0].room_name,
        "date":req.body.date,
        "start_time":req.body.start_time,
        "end_time":req.body.end_time,
        "status":"Approved"
      }
      obj.push(reqObj);
      var json  = JSON.stringify(obj);
      fs.writeFile('data/rooms.json', json, function(err,data){
          if(err) throw err;
          res.send('Room Booked!!!')
      });
    }
    else
    {
      if(tempCust.length == 0){
        res.send('Room Does not exist!!!')
      }
      else
      {
        res.send('Room already Booked!!!')
      }
    }
    
  })
  })
  
});
router.post('/add-room', function(req, res, next) {
  fs.readFile('data/customer.json','utf-8',function(err,data){
    if(err) throw err;
    // console.log(JSON.parse(data))
    var obj = [];
    obj = JSON.parse(data);
      var reqObj = {
        "id": obj.length + 1,
        "room_name": req.body.room_name,
        "seat_available": req.body.seat_available,
        "price": req.body.price,
        "amenities": req.body.end_time,
      }
      obj.push(reqObj);
      var json  = JSON.stringify(obj);
      fs.writeFile('data/customer.json', json, function(err,data){
          if(err) throw err;
          res.send('Room added!!!')
      }); 
  })
});
module.exports = router;
