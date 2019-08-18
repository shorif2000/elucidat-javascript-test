import React from 'react';
import ReactDOM from 'react-dom';
import TicketIcon from '../../src/components/Icons/TicketIcon';


const seatNumber = '';
const price = '';
const available = false;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TicketIcon seatNumber={seatNumber} price={price} available={available} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
