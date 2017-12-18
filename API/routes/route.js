'use strict';
module.exports = function(app) {
  var shortenController = require('../controllers/controller');


  app.route('/:id')
    .get(shortenController.redirect);

  app.route('/get/:id')
    .get(shortenController.read_a_task);

  app.route('/getAll/')
    .get(shortenController.unAuthorise)
    .post(shortenController.list_all_url);

  app.route('/shorten/')
    .get(shortenController.unAuthorise)
    .post(shortenController.create_a_short_url);


  app.route('/update/:id')
    .get(shortenController.unAuthorise)
    .post(shortenController.update_a_task);

  app.route('/delete/:id')
    .get(shortenController.unAuthorise)
    .post(shortenController.delete_short_url);
};
