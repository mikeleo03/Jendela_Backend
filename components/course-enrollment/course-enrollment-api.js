const router = require("express").Router();
const courseEnrollmentController = require("./course-enrollment-controller");

router.post("/course-enrollment", courseEnrollmentController.createEnrollment);
router.get("/course-enrollment/:id", courseEnrollmentController.getEnrollment);
router.get("/course-enrollment/all", courseEnrollmentController.getAllEnrollments);
router.put(
    "/course-enrollment/:id",
    courseEnrollmentController.updateEnrollment
);
router.delete(
    "/course-enrollment/:id",
    courseEnrollmentController.deleteEnrollment
);

module.exports = router;
