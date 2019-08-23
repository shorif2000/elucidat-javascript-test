const asyncHandler = require('express-async-handler')
const Seat = require("../model/seat.js");

const { validationResult } = require("express-validator");

exports.fetch_seat = asyncHandler(async (req, res, next) => {
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
});

exports.update_seat = asyncHandler(async (req, res, next) => {
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
});

exports.fetch_available = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = errors.array();
    err[0].error = true;
    err[0].status = 422; 
    return next(err[0]);
  }
	console.log(req);
  Seat.getSeatByAvailability(req.params.disabled || req.query.disabled, (err, seat) => {
    if (err) next(err);
    else res.json(seat);
  });
});

exports.fetch_cheapest_seat = asyncHandler(async (req, res, next) => {
  Seat.getSeatByPrice((err, seat) => {
    if (err) next(err);
    else res.json(seat);
  });
});

