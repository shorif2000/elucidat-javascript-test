const fs = require("fs");
const fileName = "./seatData.json";
const file = require(fileName);
const seatCollection = [];

const Seat = function(seat) {
  this.seat = seat.seat;
  this.seatNumber = seat.seatNumber;
  this.price = seat.price;
  this.available = seat.available;
  this.disabilityAccessible = seat.disabilityAccessible;
};

Seat.findSeat = function(key, value) {
  this.seat = file.find(obj => obj[key] === value);
  return this.seat;
};

Seat.getSeatByNumber = function(seatNumber, result) {
  this.seat = this.findSeat('seatNumber', seatNumber);
  if (this.seat !== undefined && Object.keys(this.seat).length > 0) {
    result(null, this.seat);
  } else {
    result({ error: true, message: "Seat not found" });
  }
};

Seat.bookSeat = function(seatNumber, result) {
  this.seat = this.findSeat('seatNumber', seatNumber);
  if (this.seat === undefined || Object.keys(this.seat).length === 0) {
    result({ error: true, message: "Seat not found" });
  }
  if(!this.seat.available){
    result({ error: true, message: "Seat unavailable to book" });
  }
  const newSeatData = file.map(row => {
    if (row.seatNumber === seatNumber) {
      row.available = false;
      this.seat = row;
    }
    return row;
  });
  fs.writeFileSync("./model/seatData.json", JSON.stringify(newSeatData,null,2), "utf-8", function(err) {
    if (err) {
      result({ error: true, message: "failed to update booking" });
    }
  });

  result(null, this.seat);
};


Seat.getSeatByAvailability = function(disabled, result) {
  const seats = file.filter( seat  =>  (disabled === undefined && seat.available) || ( seat.available && disabled !== undefined && seat.disabilityAccessible == disabled) ).map( seat => seat.seatNumber );
  if ( Object.keys(seats.length > 0 )) {
    result(null, {seats: seats} );
  } else {
    result({ error: true, message: "Seat not found" });
  }
};


Seat.getSeatByPrice = function(result) {
  const seats = file.filter( seat => seat.price.replace(/[^0-9.-]+/g,"") == Math.min(...file.map(function ( seat ) { return Number(seat.price.replace(/[^0-9.-]+/g,"")) }) ) ).map(seat => seat.seatNumber); 
  result(null,{seats: seats});
};

module.exports = Seat;

