import React, { Component } from 'react';
import TicketIcon from '../Icons/TicketIcon';

class Ticket extends Component { 

  render() {
    const { selected } = this.props;
    if(selected !== null){
      const {  price, seatNumber, available } = selected;
      return (
        <>
	  <div className="row-fluid text-center"><h4>Chosen</h4></div>
	  <div className="row-fluid text-center">
	    <TicketIcon width="500" seatNumber={seatNumber} price={price} available={available}  />
	  </div>
	</>
      );
    }
    return null;
  }
}

export default Ticket;
