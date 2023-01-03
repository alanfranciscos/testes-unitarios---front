import { calculaNovoSaldo } from '.';

describe('Tests util functions', () => {
  it('should upper bank balance', () => {
    const transacao = {
      transacao: 'Depósito',
      valor: 50,
    };

    const novosSaldo = calculaNovoSaldo(transacao, 100);

    expect(novosSaldo).toBe(150);
  });

  it('should lower bank balance', () => {
    const transacao = {
      transacao: 'Transferência',
      valor: 50,
    };

    const novosSaldo = calculaNovoSaldo(transacao, 100);

    expect(novosSaldo).toBe(50);
  });
});
it('Should return bank balance attualized with income', () => {
  const calculaRendimento = jest.fn((saldo) => saldo + saldo * 0.005);

  const saldo = 100;

  const novoSaldo = calculaRendimento(saldo);

  expect(novoSaldo).toBe(100.5);
  expect(calculaRendimento).toBeCalled();
  expect(calculaRendimento).toHaveBeenCalledWith(saldo);
});
