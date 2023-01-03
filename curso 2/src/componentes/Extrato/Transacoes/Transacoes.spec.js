import { render, screen } from '@testing-library/react';
import Transacoes from './';
import estilos from '../Extrato.module.css';

it('should render Transacoes whit actual props', () => {
  const transacao = {
    transacao: 'Depósito',
    valor: 100,
  };
  render(<Transacoes transacao={transacao} estilos={estilos} />);
  const tipoTransacao = screen.getByTestId('tipoTransacao');
  const valorTransacao = screen.getByTestId('valorTransacao');

  expect(tipoTransacao).toHaveTextContent('Depósito');
  expect(valorTransacao).toHaveTextContent('R$ 100');
});
