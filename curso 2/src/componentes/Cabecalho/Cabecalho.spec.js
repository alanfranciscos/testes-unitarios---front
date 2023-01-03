import { render, screen } from '@testing-library/react';
import Cabecalho from './';

it('should render header component', () => {
  render(<Cabecalho />);
  const nomeUsuario = screen.getByText('Joana Fonseca Gomes');

  expect(nomeUsuario).toBeInTheDocument();
});
