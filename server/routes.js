import express from 'express';
import mongodb from 'mongodb';
import 'babel-polyfill'

const router = express.Router();
const url = "mongodb://localhost:27017/";
const database = 'classdatabase';
const products = [
  {"id": 1, "name": "Lipton", "image": "Lipton.jpg", "price": 1.58, "details": "Lipton Soup with Real Chicken Flavor Extra Noodle Soup Mix, 4.9 oz 2ct", "category": "BreakFast", "rating": 2.5},
  {"id": 2, "name": "Macroni", "image": "Macaroni.jpg", "price": 3.24, "details": "Great Value Thick & Creamy Macroni & Cheese, 7.25 ox, 6 count", "category": "BreakFast", "rating": 2},
  {"id": 3, "name": "Kellogg", "image": "Kelloggs.jpg", "price": 3.78, "details": "Kellogg's Breakfast Cereal Mueslix, Original, Cereal Mueslix 15.3 Oz", "category": "BreakFast", "rating": 4},
  {"id": 4, "name": "Starbucks", "image": "Starbucks.jpg", "price": 11.36, "details": "(8 Cans) Starbucks Doubleshot Espresso & Cream Light, 6.5 FI Oz", "category": "Coffee", "rating": 4},
  {"id": 5, "name": "Starbucks Cold", "image": "Starbucks_Cold.jpg", "price": 21, "details": "Starbucks Cold Brew Coffee, Black Sweetened, 11oz Glass Bottles", "category": "Coffee", "rating": 1},
  {"id": 6, "name": "Rice Krispies Treats", "image": "Rice_Krispies_Treats.jpg", "price": 8.98, "details": "Rice Krispies Treats Crispy Marshmallow Squares Bars 31.2 oz", "category": "BoxedMeals", "rating": 4},
  {"id": 7, "name": "Malt-O-Meal", "image": "Malt_O_Meal.jpg", "price": 3.98, "details": "Malt-O-Meal Quick Cooking Wheat Hot Cereal, Chocolate, 36 Oz", "category": "BoxedMeals", "rating": 3}
]
router.get('/',(req,res) => {
        (async function mongo(){
          let client;
          try{
            client = await mongodb.connect(url);
            const db = client.db(database);
            const col = await db.collection('cart');
            const data = await col.find().toArray();
            res.setHeader('Access-Control-Allow-Origin','*')
		        res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept')
			      res.json(products);
            //res.status(200).send(data)
          }
          catch(err){
            throw err;
          }
        }())  
    });



module.exports = router;