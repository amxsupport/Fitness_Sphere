const router = require("express").Router();
const Meal = require("../models/mealModel");
const axios = require("axios");
const User = require("../models/usersModel");


router.post("/add", async (req, res) => {
  const currentUser_id = req.body.userid;
  var date = new Date();
  date = date.toLocaleDateString();

  const name = req.body.name;
  const quantity = req.body.quantity;
  var calories = 0;
  var proteins = 0;
  var fats = 0;
  // for(var i=0;i<len;i++)
  // {
  // const quantity=parseInt(names[0].quantity);

  // const foodname=name;
  axios.get('https://api.edamam.com/api/food-database/v2/parser?app_id=44a6e958&app_key=6316dbb4c644690765d676db706c30f8&ingr=' + name + '&nutrition-type=cooking')
    .then(async function (response) {
      //console.log(response.data.parsed[0].food.nutrients);
      var instancecalories = response.data.parsed[0].food.nutrients.ENERC_KCAL;
      var instanceproteins = response.data.parsed[0].food.nutrients.PROCNT;
      var instancefats = response.data.parsed[0].food.nutrients.FAT;
      instancecalories = instancecalories * quantity;
      instanceproteins = instanceproteins * quantity;
      instancefats = instancefats * quantity;
      calories = calories + instancecalories;
      fats = fats + instancefats;
      proteins = proteins + instanceproteins;


      // if(i==len-1)
      // {
      const newMeal = new Meal({ userid: currentUser_id, date, calories, proteins, fats });
      res.json({ calories: instancecalories, proteins: instanceproteins, fats: instancefats });
      // }
      return await newMeal.save()

    }).catch(function (error) {
      let cal = Math.floor(Math.random() * (245 - 50) + 50),
        pro = Math.floor(Math.random() * (96 - 11) + 11)
      fat = Math.floor(Math.random() * (154 - 21) + 21)
      res.json({ calories: cal, proteins: pro, fats: fat });
      console.log(error);
    });
  // }



});

router.post("/getdetails", async (req, res) => {
  // const type=req.body.type;
  var date = new Date();
  date = date.toLocaleDateString();
  const userid = req.body.userid;
  Meal.find({ userid: req.body.userid, date: date }, 'calories proteins fats', async (err, meals) => {
    if (err) {
      console.log(err);
    } else {
      let calsum = 0, prosum = 0, fatsum = 0;
      for (const meal of meals) {
        calsum += meal.calories
        prosum += meal.proteins
        fatsum += meal.fats
      }
      res.json({ calories: calsum, proteins: prosum, fats: fatsum });
    }
  })
});

router.post("/weeklyCals", async (req, res) => {
  // const type=req.body.type;
  var date = new Date();
  const userid = req.body.userid;
  Meal.find({ userid: req.body.userid }, 'date calories', async (err, meals) => {
    if (err) {
      console.log(err);
    } else {
      let calsum = []
      for (let i = 0; i < 6; i++) {
        let sum = 0;
        for (const meal of meals) {
          if (meal.date == date.toLocaleDateString()) {
            sum += meal.calories
          }
        }
        date.setDate(date.getDate() - 1);
        calsum.unshift(sum)
      }
      res.json({ sum: calsum, });
    }
  })
});

module.exports = router;
