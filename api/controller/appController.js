const Seat = require("../model/seat.js");

const { validationResult } = require("express-validator");

exports.fetch_seat = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ error: true, message: errors.array() });
  }

  Seat.getSeatByNumber(req.params.seatNumber, (err, seat) => {
    if (err) res.json(err);
    else res.json(seat);
  });
};

exports.update_seat = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ error: true, message: errors.array() });
  }

  Seat.bookSeat(req.params.seatNumber, (err, seat) => {
    if (err) res.json(err);
    else res.json(seat);
  });
};

