import React from 'react';
import ReactDOM from 'react-dom';
import Booking from '../../src/components/Booking';
import seats from '../../src/seatData';
import { shallow } from 'enzyme';


describe('Booking', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Booking />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Booking />, { disableLifecycleMethods: true });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("must render a loading span before api call success", () => {
    // expect(wrapper.find("span.loading").length).toBe(1);
  });

  it("componentDidMount", (done) => {

    const spyDidMount = jest.spyOn(Booking.prototype,"componentDidMount");
    fetch.mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => {
          return Promise.resolve({
            seats:{} 
          });
        }
      });
    });

    const didMount = wrapper.instance().componentDidMount();

    expect(spyDidMount).toHaveBeenCalled();
    didMount.then(() => {
      wrapper.update();
      expect(wrapper.find("div.seatmap_container"));
      expect(wrapper.find("spans.loading").length).toBe(0);
      spyDidMount.mockRestore();
      fetch.mockClear();
      done();
    });
  });
/*
  it('fetches data from server when server returns a successful response', done => { 
    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse); 
    const mockFetchPromise = Promise.resolve({ 
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise); 
    
    const wrapper = shallow(<Booking />); 
                            
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('http://52.56.180.211');

    process.nextTick(() => { 
      expect(wrapper.state()).toEqual({
	seats
      });

      global.fetch.mockClear(); 
      done(); 
    });
  });
*/
});
