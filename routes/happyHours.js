const express = require('express');
const router = express.Router();
const happyHoursController = require('../controllers/happyHours');

router.get('/', happyHoursController.index);
router.get('/:id', happyHoursController.show);
router.post('/', happyHoursController.create);
router.put('/:id', happyHoursController.update);
router.delete('/:id', happyHoursController.destroy);

module.exports = router;
