/**console.log ("welcome world");

const http = require ("http")
const server = http.createServer ( (req,res)=>{res.write('<h1>Hello node</h1>')
res.end() })
server.listen (5000,(err)=>{err? console.log(err): console.log("server is running on port 5000")} )**/
const fs = require ("fs")
console.log (fs)
fs.appendFile ('welcome.txt','hello Node',(err)=>{err? console.log(err): console.log("okay")} )
fs.readFile('./welcome.txt',{encoding: 'utf8'} ,(err , data)=>{err? console.log(err): console.log('file containe :',data) })