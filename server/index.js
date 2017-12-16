// เขียนคำสั่งเรียกใช้ api จาก index.js ใน contacts อีกที
const express = require('express')
const bodyparser = require('body-parser')
const contactsRouter = require('../contacts') //เรียกใช้งานไฟล์ index.js ใน contacts
const app = express()

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.use('/', contactsRouter)

module.exports = app  //ส่ง app ออก ไปให้ไฟล์ index.js สำหรับรัน server ใช้งาน
