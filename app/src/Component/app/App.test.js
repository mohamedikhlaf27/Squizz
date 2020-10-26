import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Login from "../login/Login";

describe("<App />", () => {
  it("Renders <App /> component correctly", () => {
    const { getByText } = render(<App />);
    expect(getByText(/Squizz/i)).toBeInTheDocument();
  });
});
