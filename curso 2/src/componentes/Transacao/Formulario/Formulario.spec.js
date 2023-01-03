import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Formulario from './';

describe('render the Formulario component', () => {
  it('should render a input', () => {
    render(<Formulario />);

    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    expect(campoTexto).toBeInTheDocument();
  });

  it('should render a input whith type number', () => {
    render(<Formulario />);

    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    expect(campoTexto).toHaveAttribute('type', 'number');
  });

  it('should render a input and fill this', () => {
    render(<Formulario />);

    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    userEvent.type(campoTexto, '50');

    expect(campoTexto).toHaveValue(50);
  });

  it('Should call a submit event when click in realize transaction', () => {
    const realizarTransacao = jest.fn();

    render(<Formulario realizarTransacao={realizarTransacao} />);
    const botao = screen.getByRole('button');

    userEvent.click(botao);
    expect(realizarTransacao).toHaveBeenCalledTimes(1);
  });
});
