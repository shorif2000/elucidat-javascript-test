const fs = require("fs");
const fileName = "./seatData.json";

const Seat = function(seat) {
  this.seat = seat.seat;
  this.seatNumber = seat.seatNumber;
  this.price = seat.price;
  this.available = seat.available;
  this.disabilityAccessible = seat.disabilityAccessible;
};

Seat.findSeat = function(key, value) {
  return new Promise((resolve, reject) => {
    try {
      const file = require(fileName);

      const seat = file.find(r => r[key] === value);
      if (!seat) {
        reject({
          error: true,
          message: "Seat not found",
          status: 404
        });
      }
      resolve(seat);
    } catch (error) {
      reject({
        error: true,
        message: error.message,
        status: 404
      });
    }
  });
};

Seat.getSeatByNumber = function(seatNumber, result, next) {
  try {
    this.findSeat("seatNumber", seatNumber)
      .then(seat => {
        if (seat !== undefined && Object.keys(seat).length > 0) {
          return result(null, seat);
        } else {
          return result({
            error: true,
            message: "Seat not found",
            status: 404
          });
        }
      })
      .catch(error => {
        //console.log(error);
        console.log("1st catch");
        return result(error, null);
      });
  } catch (error) {
    console.log("outer catch");
    //console.log(error);
    return result(error);
  }
};

Seat.bookSeat = function(seatNumber, result) {
  this.findSeat("seatNumber", seatNumber)
    .then(seat => {
      if (seat === undefined || Object.keys(seat).length === 0) {
        return result({ error: true, message: "Seat not found" });
      }
      if (!seat.available) {
        return result({ error: true, message: "Seat unavailable to book" });
      }
      try {
        const file = require(fileName);
        const newSeatData = file.map(row => {
          if (row.seatNumber === seatNumber) {
            row.available = false;
            seat = row;
          }
          return row;
        });
        fs.writeFileSync(
          "./model/seatData.json",
          JSON.stringify(newSeatData, null, 2),
          "utf-8",
          function(err) {
            if (err) {
              return result({
                error: true,
                message: "failed to update booking"
              });
            }
          }
        );

        return result(null, seat);
      } catch (error) {
        return {
          error: true,
          message: error.message,
          status: 404
        };
      }
    })
    .catch(error => {
      console.log(error);
      console.log("1st catch");
      return result(error, null);
    });
};

Seat.getSeatByAvailability = function(disabled, result) {
  try {
    const file = require(fileName);
    const seats = file
      .filter(
        seat =>
          (disabled === undefined && seat.available) ||
          (seat.available &&
            disabled !== undefined &&
            seat.disabilityAccessible === disabled)
      )
      .map(seat => seat.seatNumber);
    if (Object.keys(seats.length > 0)) {
      result(null, { seats: seats });
    } else {
      result({ error: true, message: "Seat not found" });
    }
  } catch (error) {
    return {
      error: true,
      message: error.message,
      status: 404
    };
  }
};

const bestSeats = seats => {
  var min = Infinity,
    minVal;
  const result = [];
  for (const seat of seats) {
    const price = Number(seat.price.slice(1));
    if (price < min) {
      min = price;
      minVal = seat.price;
    }
  }
  for (const seat of seats) {
    if (seat.price === minVal) {
      result.push(seat.seatNumber);
    }
  }
  return result;
};

Seat.getSeatByPrice = function(result) {
  try {
    const file = require(fileName);
    const seats = bestSeats(file);
    console.log(seats);
    result(null, { seats: seats });
  } catch (error) {
    return {
      error: true,
      message: error.message,
      status: 404
    };
  }
};

module.exports = Seat;

