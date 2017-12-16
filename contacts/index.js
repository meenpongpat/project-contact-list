
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
//เขียน api สำหรับเพิ่มข้อมูล (post)
//เขียน api สำหรับแก้ไขข้อมูล (put)
//เขียน api สำหรับลบข้อมูล  (delete)


module.exports = router   //ส่ง router ออกไปให้คนอื่นใช้งาน
