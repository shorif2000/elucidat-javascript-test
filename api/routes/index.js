const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const actions = require("../controller/appController");

router.get(
  "/seatData/:seatNumber",
  [
    check("seatNumber")
      .matches(/^[0-9][a-z]$/i)
      .withMessage("must start with a number(0-9) and end with a letter")
  ],
  actions.fetch_seat
);

router.post(
  "/bookSeat",
  [
    check("seatNumber")
      .exists(true)
      .withMessage("Must pass seatNumber")
      .matches(/^[0-9][a-z]$/i)
      .withMessage("must start with a number(0-9) and end with a letter")
  ],
  actions.update_seat
);

router.get(
  "/availableSeats/:disabled?",
  [
    check("disabled")
      .optional()
      .isBoolean()
      .toBoolean()
  ],
  actions.fetch_available
);

router.get("/cheapestSeat", actions.fetch_cheapest_seat);

module.exports = router;

