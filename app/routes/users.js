const Router = require('koa-router');
const router = new Router({ prefix: '/users' });
const UsersController = require('../controllers/users');

router.get('/', UsersController.find);

router.post('/', UsersController.create);

router.get('/:id', UsersController.findById);

router.put('/:id', UsersController.update);

router.delete('/:id', UsersController.delete);

module.exports = router;
