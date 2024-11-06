const express = require("express")
const employeeController = require("./../controllers/employeeController")
const router =express.Router()


router.route("/")
     .get(employeeController.getAllEmployeeDetails)

router.route("/signup")
.get(employeeController.showSignUp)
.post(employeeController.addNewUser)

router.route("/delete")
  .get(employeeController.removeUser)
module.exports = router;
        