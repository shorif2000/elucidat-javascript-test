const fs = require("fs");
const fileName = "./seatData.json";
const file = require(fileName);

const Seat = function(seat) {
  this.seat = seat.seat;
  this.seatNumber = seat.seatNumber;
  this.price = seat.price;
  this.available = seat.available;
  this.disabilityAccessible = seat.disabilityAccessible;
};

Seat.findSeat = seatNumber => {
  return file.find(obj => obj.seatNumber === seatNumber);
};

Seat.getSeatByNumber = function(seatNumber, result) {
  this.seat = this.findSeat(seatNumber);
  if (Object.keys(this.seat).length > 0) {
    result(null, this.seat);
  } else {
    result({ error: true, message: "Seat not found" });
  }
};

Seat.bookSeat = function(seatNumber, result) {
  this.seat = this.findSeat(seatNumber);
  if (Object.keys(this.seat).length > 0) {
    result({ error: true, message: "Seat not found" });
  }
  const newSeatData = file.map(row => {
    if (row.seatNumber === seatNumber) {
      row.available = false;
      this.seat = row;
    }
    return row;
  });
  fs.writeFile("./seatData.json", newSeatData, "utf-8", function(err) {
    if (err) {
      result({ error: true, message: "failed to update booking" });
    }
  });

  result(null, this.seat);
};

module.exports = Seat;

