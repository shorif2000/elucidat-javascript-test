import React, { Component } from 'react';
import Seatmap from 'react-seatmap';
import '../../style/main.scss';
import seats from '../../seatData';
import Ticket from '../Ticket';

class Booking extends Component { 

  constructor(props){
    super(props);

    this.state = {
      row: null,
      number: null,
      data: [],
      selected: null
    }

    this.addSeatCallback = this.addSeatCallback.bind(this);
    this.removeSeatCallback = this.removeSeatCallback.bind(this);
  }

  componentDidMount(){
    //load data
    const data = this.formatSeatData(seats);    
    this.setState({data});
  }

  getIndexFromLetter(letter) {
    return letter.charCodeAt(0) - 65;
  }

  formatSeatData(seats){
    const rows = [];
    seats.seats.map( (seat,i) => {
      const arr = seat.seatNumber.split(/([0-9]+)/).filter(Boolean);
      seat.number = arr[0];
      seat.isReserved = !seat.available;
      const index = this.getIndexFromLetter(arr[1]);
      if(typeof rows[index] === 'undefined') {
        rows[index] = [];
      }
      rows[index].push(seat);
      return true;
    });
    
    return rows;
  }

  addSeatCallback(row, number) {
    const { data } = this.state;
    console.log(row, number);
    const index = this.getIndexFromLetter(row);
    console.log(data[index][number-1]) 
    this.setState({ row, number, selected: data[index][number-1] });
  }

  removeSeatCallback(row, number) {
    console.log(row, number)
    this.setState({row: null, number: null, selected: null});
  }
  
  render() {
    const { data, selected } = this.state; 
    console.log(selected) 
    if(Object.keys(data).length>0){
      return (
        <div className="container-fluid text-center">
	  <div className="" style={{float:'left', padding: '10px', marginTop:'10px'}}>
            <Seatmap rows={data} maxReservableSeats={1} alpha addSeatCallback={this.addSeatCallback} removeSeatCallback={this.removeSeatCallback} />
	  </div>
	  <div className="" style={{float:'left', padding: '10px'}}>
            <Ticket selected={selected} />
	  </div>
        </div>
      );
    }
    return null;
  }
}

export default Booking;
