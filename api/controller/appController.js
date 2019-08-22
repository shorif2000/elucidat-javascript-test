const Seat = require("../model/seat.js");

const { validationResult } = require("express-validator");

exports.fetch_seat = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = errors.array();
    err[0].error = true;
    err[0].status = 422;
    return next(err[0]);
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
    err[0].status = 422;
    return next(err[0]);
  }

  Seat.bookSeat(req.body.seatNumber, (err, seat) => {
    if (err) next(err);
    else res.json(seat);
  });
};

exports.fetch_available = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = errors.array();
    err[0].error = true;
    err[0].status = 422; 
    return next(err);
  }
  Seat.getSeatByAvailability(req.params.disabled, (err, seat) => {
    if (err) next(err);
    else res.json(seat);
  });
};

exports.fetch_cheapest_seat = (req, res, next) => {
  Seat.getSeatByPrice((err, seat) => {
    if (err) next(err);
    else res.json(seat);
  });
};

