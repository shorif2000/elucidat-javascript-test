import React, { Component } from 'react';
import Seatmap from 'react-seatmap';
import style from '../../style/main.scss';
import seats from '../../seatData';

class Map extends Component { 


  componentDidMount(){
    //load data
  }

  getIndexFromLetter(letter) {
    return letter.charCodeAt(0) - 65;
  }

  formatSeatData(seats){
    const rows = [];
    seats.seats.map( (seat,i) => {
      const arr = seat.seatNumber.split(/([0-9]+)/).filter(Boolean);
      seat.number = arr[0];
      seat.isReserved = seat.available;
      const index = this.getIndexFromLetter(arr[1]);
      if(typeof rows[index] === 'undefined') {
        rows[index] = [];
      }
      rows[index].push(seat);
    });
    
    return rows;
  }

  addSeatCallback(row, number) {
    console.log(row, number)
  }

  removeSeatCallback(row, number) {
    console.log(row, number)
  }
  
  render() {
    
    const data = this.formatSeatData(seats);
    return (
      <>
        <Seatmap rows={data} maxReservableSeats={1} alpha addSeatCallback={this.addSeatCallback} removeSeatCallback={this.removeSeatCallback} />
      </>
    );
  }
}

export default Map;
