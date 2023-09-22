const { body, validationResult } = require("express-validator");

// Middleware for validating tasks
const validateTask = [
  body("name")
    .isLength({ min: 3, max: 20 })
    .withMessage("Title must be between 5 and 20 characters."),
  body("description")
    .isLength({ min: 3, max: 500 })
    .withMessage("Description must be between 3 and 500 characters."),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next();
  },
];

module.exports = validateTask;
