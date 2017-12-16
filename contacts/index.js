
const express = require('express')
const router = express.Router()

var person = [
    {
        "id": "0",
        "fname": "Shirley",
        "lname": "Jones",
        "email": "ShirleyDJones@jourrapide.com",
        "phone": "909-466-6123",
        "url": "psychicmilena.com",
        "note": "2969 Gordon Street Rancho Cucamonga, CA 91730"
    }
]

//เขียน api สำหรับเรียกดูข้อมูล (get)
router.get('/', (req, res) => {
    
     var x = req.query.firstname;
      if(x != null)
      {
          for(var i=0; i<person.length; i++)
          {
              if(person[i].firstname == x)
              {
                  res.json(person[i]);
              }   
          }
      }
      else{
          res.json(person);
      }
     
  })
  
router.get('/:id', (req, res) => {
    
    res.json(person[req.params.id]);
    
 })

//เขียน api สำหรับเพิ่มข้อมูล (post)
router.post('/', (req, res) => {
    var temp = 0;
    if(person.length){
    temp = parseInt(person[person.length - 1].id) + 1;
    }
        let  tempList = {
            id : temp.toString(),
            firstname: req.body.firstname,
            lastname : req.body.lastname,
            email :    req.body.email,
            phone :    req.body.phone,
            url :      req.body.url,
            notes :    req.body.notes
        }
        person.push(tempList);
    });

//เขียน api สำหรับแก้ไขข้อมูล (put)
//เขียน api สำหรับลบข้อมูล  (delete)


module.exports = router   //ส่ง router ออกไปให้คนอื่นใช้งาน
