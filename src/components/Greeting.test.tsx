import React from 'react';
import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('menampilkan greeting dengan nama', () => {
  render(<Greeting name="Wahyu" />);
  const hasil = screen.getByText(/Hello, Wahyu!/i);
  expect(hasil).toBeInTheDocument();
});
