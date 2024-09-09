import express,{Request,Response,NextFunction} from 'express'
import { GetFoodAvaliabilty, GetFoodIn30Min, GetTopReasturants, ReasturantById, SearchFoods } from '../controllers'

const router = express.Router()

//Food Availability
router.get("/:pincode",GetFoodAvaliabilty)

//Top Restaurants
router.get("/top-restaurants/:pincode",GetTopReasturants)

//Food in 30 minutes
router.get("/food-in-30-min/:pincode",GetFoodIn30Min)

//Search Foods
router.get("/search/:pincode",SearchFoods)

//Find Restaurant by ID
router.get("/restaurant/:id",ReasturantById)

export {router as ShoppingRoute}