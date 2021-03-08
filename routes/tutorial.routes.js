module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");
  // const callsController = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  // router.post("/", tutorials.create);
  router.post("/createCall", tutorials.createCall);
  router.post("/dropCall", tutorials.dropCall);
  // router.post("/", callsController.createCall);
  app.use('/api/calls', router);
  // app.use('/api/call', router);
};