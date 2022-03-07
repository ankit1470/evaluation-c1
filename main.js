const express = require('express');
const app = express();
app.use(logger)
//app.use(checkPermission);
app.get('/books', (req, res) => {
 return res.send({ route: "/books"})
  
})

app.get("/libraries", (req, res) => {
return res.send({ route: "/libraries",permission:true,role: req.role });
})

app.get("/authors", (req, res) => {
 return res.send({ route: "/authors",permission:true, role: req.role });
})


function logger(req, res, next) {
console.log(req.path)
  next();
}
// function check(role) {
//   return  function checkPermission(req, res,next){
// if(role ==="librarian"||role ==="author"){
//     return next();
// }
// }
// }


// function checkPermission(req, res, next) {
// if(req.role=='/authors'){
//     req.permission=true;
// }
// }

app.listen(8002,()=>{
    console.log('listnening on port 8002');
})
