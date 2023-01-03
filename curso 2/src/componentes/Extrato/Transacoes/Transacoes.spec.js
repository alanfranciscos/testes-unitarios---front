import { render, screen } from '@testing-library/react';
import Transacoes from './';
import estilos from '../Extrato.module.css';

it('should render Transacoes whit actual props', () => {
  const transacao = {
    transacao: 'Depósito',
    valor: 100,
  };

  const { rerender } = render(
    <Transacoes transacao={transacao} estilos={estilos} />
  );
  const tipoTransacao = screen.getByTestId('tipoTransacao');
  const valorTransacao = screen.getByTestId('valorTransacao');

  expect(tipoTransacao).toHaveTextContent('Depósito');
  expect(valorTransacao).toHaveTextContent('R$ 100');

  const novaTransacao = {
    transacao: 'Transferência',
    valor: 50,
  };

  //rerender verifica se o componente esta atualizando com as novas props que estão sendo passadas
  rerender(<Transacoes transacao={novaTransacao} estilos={estilos} />);
  const novoTipoTransacao = screen.getByTestId('tipoTransacao');
  const nooValorTransacao = screen.getByTestId('valorTransacao');

  expect(novoTipoTransacao).toHaveTextContent('Transferência');
  expect(nooValorTransacao).toHaveTextContent('- R$ 50');
});
