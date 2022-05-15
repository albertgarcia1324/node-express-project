const express = require("express");
const gymRouter = express.Router();

gymRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })

  .get((req, res) => {
    res.end("Get Jiu-Jitsu Gym");
  })

  .post((req, res) => {
    res.end(
      `Will add gym: ${req.body.name} with description: ${req.body.description}`
    );
  })

  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported for this project");
  })

  .delete((req, res) => {
    res.end("Deleting a gym");
  });

gymRouter
  .route("/:gymId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })

  .get((req, res) => {
    res.end(`Will send details of gyms: Gym ${req.params.gymId}`);
  })

  .post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on ${req.params.gymId}`);
  })

  .put((req, res) => {
    res.write(`Updating the gym: ${req.params.gymId}\n`);
    res.end(`Will update the gym: ${req.body.name}
        with description: ${req.body.description}`);
  })

  .delete((req, res) => {
    res.end(`Delete gym: ${req.params.gymId}`);
  });

module.exports = gymRouter;
