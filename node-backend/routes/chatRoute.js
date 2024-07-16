const router = require("express").Router();
const User = require("../models/usersModel");
const axios = require("axios")

router.get("/test", async (req, res) => { // https://backend.sidd065.repl.co/api/chat/test
  try{
      const result = await axios({
        method:"POST",
        "Content-Type": "application/json",
        url: "https://backend.sidd065.repl.co/api/users/all",
        data:{
        points: "3000",
        userid: '63ca9686e84428a6d612f506',
        }
      });
      console.log(result.data)
      res.send({
        message:"success",
        data:result.data,
        success:true
      })
    } catch(e){
      console.log(e);
    }
});

module.exports = router;

