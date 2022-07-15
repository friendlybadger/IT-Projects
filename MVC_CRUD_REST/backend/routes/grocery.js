const express =require('express')

const groceryControllers= require('../controllers/grocery')

const router = express.Router();

router.get('/', groceryControllers.getAllGroceries);

router.post('/', groceryControllers.postGrocery);
router.put('/', groceryControllers.putGrocery);
router.delete('/:id', groceryControllers.deleteGrocery);

module.exports = router;