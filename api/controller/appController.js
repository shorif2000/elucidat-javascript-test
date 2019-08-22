const Seat = require("../model/seat.js");

const { validationResult } = require("express-validator");

exports.fetch_seat = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = errors.array();
    err[0].error = true;
    next(err);
    return;
  }

  Seat.getSeatByNumber(req.params.seatNumber, (err, seat) => {
    if (err) next(err);
    else res.json(seat);
  });
};

exports.update_seat = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = errors.array();
    err[0].error = true;
    next(err);
    return;
  }

  Seat.bookSeat(req.params.seatNumber, (err, seat) => {
    if (err) next(err);
    else res.json(seat);
  });
};

exports.fetch_available = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = errors.array();
    err[0].error = true;
    next(err);
    return;
  }
  Seat.getSeatByAvailability(req.params.disabled, (err, seat) => {
    if (err) next(err);
    else res.json(seat);
  });
};

