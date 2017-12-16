// เขียนคำสั่งกำหนด port ในการรัน server
const server = require('./server')  //เรียกใช้งานไฟล์ index.js ใน server

server.listen(3000, () => console.log('Example app listening on port 3000 ??'))   //กำหนดไว้สำหรับรัน server 