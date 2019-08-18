import React from 'react';
import ReactDOM from 'react-dom';
import Ticket from '../../src/components/Ticket';

const selected = null;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Ticket selected={selected} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
