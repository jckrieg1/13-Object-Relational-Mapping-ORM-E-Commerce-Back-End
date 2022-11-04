const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const catData = await Category.findAll({ include: Product });
    res.status(200).json(catData)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;




// const router = require('express').Router();
// const { Category, Product } = require('../../models');

// router.get('/', async (req, res) => {

//   try {
//     const catData = await Category.findAll({ include: Product });
//     res.status(200).json(catData)
//   } catch (err) {
//     res.status(500).json(err)
//   }
// });

// router.get('/:id', async (req, res) => {
//   try {
//     const catData = await Category.findByPk(req.params.id, {include: Product });
//     if (!catData) {
//       res.status(404).json({ message: 'Sorry, there is no category associated with that ID.' });
//       return;
//     }
//     res.status(200).json(catData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.post('/', async (req, res) => {
  
//   try {
//     const catData = await Category.create(req.body);
//     res.status(200).json(catData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


// router.put('/:id', async (req, res) => {
  
//   try {
//     const catData = await Category.update(req.body, {
//       where: {
//         id: req.params.id
//       }});

   
//     res.status(200).json(catData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });


// router.delete('/:id', async (req, res) => {
//   try {
//     const catData = await Category.destroy({
//       where: {
//         id: req.params.id
//       }
//     });

//     if (!catData) {
//       res.status(404).json({ message: 'There is no category associated with that ID.' });
    
//     }

//    res.status(200).json(catData);
//   } catch (err) {
//     res.status(500).json(err)
//   }
// });

// module.exports = router;