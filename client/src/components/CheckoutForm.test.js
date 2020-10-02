import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CheckoutForm from './CheckoutForm';
import App from '../App';

// Write up the two tests here and make sure they are testing what the title shows

test('form header renders', () => {
  render(<App />);
  const header = screen.getByText(/react plants/i);
  expect(header).toBeTruthy;
});

test('form shows success message on submit with form details', () => {
  render(<CheckoutForm />);

  const firstName = screen.getByLabelText(/first name/i);
  const lastName = screen.getByLabelText(/last name/i);
  const address = screen.getByLabelText(/address/i);
  const city = screen.getByLabelText(/city/i);
  const state = screen.getByLabelText(/state/i);
  const zip = screen.getByLabelText(/zip/i);
  const button = screen.getByRole(/button/i);
  const success = screen.getByText(/you have ordered some plants!/i);

  fireEvent.change(firstName, {
    target: { firstName: 'firstName', value: 'john' },
  });

  fireEvent.change(lastName, {
    target: { lastName: 'lastName', value: 'youn' },
  });

  fireEvent.change(address, {
    target: { address: 'address', value: '1234 street' },
  });

  fireEvent.change(city, {
    target: { city: 'city', value: 'los angeles' },
  });
  fireEvent.change(state, {
    target: { state: 'state', value: 'CA' },
  });
  fireEvent.change(zip, {
    target: { zip: 'zip', value: '12345' },
  });

  fireEvent.click(button);

  expect(success).toBeTruthy();
});
