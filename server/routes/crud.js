const express = require("express");
const _ = require("lodash");
const passport = require("passport");


const simpleCrud = Model => {
  const router = express.Router();
  /* const user = req.session.passport.user; */
  const fields = Object.keys(_.omit(Model.schema.paths, ["__v", "_id"]));
 

  // Retrive ALL
  router.get("/", (req, res, next) => {
    Model.find()
    .populate('user')
      .then(objects => res.json(objects))
      .catch(e => next(e));
  });

  // Create
  router.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const obj = _.pick(req.body, fields);
    console.log(req.body)
    Model.create(obj)
      .then(object => res.json(object))
      .catch(e => next(e));
  });

  // Retrive DETAIL
  router.get("/:id", (req, res, next) => {
    Model.findById(req.params.id)
      .then(object => res.json(object))
      .catch(e => next(e));
  });

  // EDIT
  router.put("/:id", (req, res, next) => {
    const updates = _.pick(req.body, fields);

    Model.findByIdAndUpdate(req.params.id, updates, { new: true })
      .then(object => res.json(object))
      .catch(e => next(e));
  });

  // DELETE
  router.delete("/:id", (req, res, next) => {
    Model.findByIdAndRemove(req.params.id)
      .then(() => res.json({ message: `SUCESSFUL DELETE ${req.params.id}` }))
      .catch(e => next(e));
  });

  return router;
};
module.exports = simpleCrud;