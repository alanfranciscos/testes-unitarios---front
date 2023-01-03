import { render, screen } from '@testing-library/react';
import Saldo from '.';

describe('Test Saldo component', () => {
  it('should render the new bank balance with new value', () => {
    render(<Saldo saldo={1000} />);
    const saldo = screen.getByTestId('saldo');
    expect(saldo).toHaveTextContent('R$ 1000');
  });
});
