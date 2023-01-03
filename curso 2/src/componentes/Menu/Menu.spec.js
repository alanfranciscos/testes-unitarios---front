import { render, screen } from '@testing-library/react';
import Menu from './';

it('should render a link from the main page', () => {
  render(<Menu />);

  const linkPaginaInicial = screen.getByText('Inicial');
  expect(linkPaginaInicial).toBeInTheDocument();
});

it('should render a list of links', () => {
  render(<Menu />);

  const listaDeLinks = screen.getAllByRole('link');
  expect(listaDeLinks).toHaveLength(4);
});

it('should dont render a link from Extrato', () => {
  render(<Menu />);

  const linkExtrato = screen.queryByText('Extrato');
  expect(linkExtrato).not.toBeInTheDocument();
});

it('should render a lis of links with the link class', () => {
  render(<Menu />);

  const links = screen.getAllByRole('link');
  links.forEach((link) => expect(link).toHaveClass('link'));

  expect(links).toMatchSnapshot();
});
