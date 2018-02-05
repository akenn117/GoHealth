// __tests__/DOB-test.js
'use strict';

jest.unmock('../App');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {DOBField} from '../App.js';
import App from '../App.js';


describe(' DOBField', () => {

  it('Successful Renders Day, Month, Year DOBField   components', () => {
    // Render a DOBField with label in the document
  //  const DOB = TestUtils.renderIntoDocument(   );

    const DOBNode = ReactDOM.findDOMNode(DOB);
 	     expect(
		shallow(<App />).length).toEqual(8);

    // Simulate a click and verify that it MOnth/Day/Year selected
    TestUtils.Simulate.change(
      TestUtils.findRenderedDOMComponentWithTag(DOBField, 'input')
    );
	
    expect(DOBField.textContent).toEqual('8');
  });
  it('Successful Renders Day, Month, Year <App />    components', () => {
  //  const component = shallow(<App />);

  });

  it('Successful Select  Day Value when clicked', () => {
   
    expect(
		shallow(<App />).find('select [selected]').val()).to.equal(value);
	wrapper.find('select').simulate('change');		
  });
 
  it('Select  Month Value when clicked', () => {
   wrapper.find('select').simulate('change');
    expect(wrapper.render().find('select [selected]').val()).to.equal(value);
  });
    
    it('Successful Select  Month Value when clicked', () =>   {
 //   const component = shallow(<App />);
  });
    
  it('Successful Select  Year Value when clicked', () => {
   //   const component = shallow(<App />);
  });
    
  it('Select  LastDay of Febuary Value when February clicked, Verify 28days if not leap year', () => {
 //     const component = shallow(<App />);
  });   
     
  it('Select  29Day Value when February in Leap Year clicked', () => {
  //    const component = shallow(<App />);
  }); 
    
  it('Select  31Days Value for each month when clicked except Months with 30Days', () => {
//	const component = shallow(<App />);
 }); 

});

//import App from '../App.js';