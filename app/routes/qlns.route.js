const express = require("express");
const qlns = require("../controllers/qlns.controller");
const { router, route } = require("../../app");

router.route("/")
    .get(qlns.findAll)
    .delete(qlns.deleteAll)

router.route("/:id")
    .get(qlns.findOne)
    .put(qlns.update)
    .delete(qlns.delete)

router.route("/create")
    .post(qlns.create)