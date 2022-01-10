var express = require("express");
var router = express.Router();
var studentModule = require('../modules/studentModule');

router.post("/student", studentModule.createStudent);
router.post("/mentor", studentModule.createMentor);
router.post("/assign", studentModule.assignStudent);
router.post("/change", studentModule.changeMentor);
router.get("/get",studentModule.list);

module.exports = router;