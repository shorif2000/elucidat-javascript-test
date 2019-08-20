const Seat = require("../model/seat.js");

const { validationResult } = require("express-validator");

exports.fetch_seat = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err =  errors.array();
    err[0].error = true;
    res.status(422).json( err );
    return;	  
  }

  Seat.getSeatByNumber(req.params.seatNumber, (err, seat) => {
    if (err) res.json(err);
    else res.json(seat);
  });
};

exports.update_seat = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = errors.array();
    err[0].error = true; 
    res.status(422).json( err );
    return;
  }

  Seat.bookSeat(req.params.seatNumber, (err, seat) => {
    if (err) res.json(err);
    else res.json(seat);
  });
};

exports.fetch_available = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err =  errors.array();
    err[0].error = true;
    res.status(422).json( err );
    return;
  }
  const disabled = req.params.disabled !== undefined ? req.params.disabled : null;
  Seat.getSeatByAvailability(req.params.disabled, (err, seat) => {
    if (err) res.json(err);
    else res.json(seat);
  });
};



exports.fetch_cheapest_seat = (req, res) => {
  Seat.getSeatByPrice( (err, seat) => {
    if (err) res.json(err);
    else res.json(seat);
  });
};

