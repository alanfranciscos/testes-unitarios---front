import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { Configuracao } from ".";

const mockNavegacao = jest.fn();

jest.mock("react-router", () => {
  return {
    useNavigate: () => mockNavegacao,
  };
});

describe("a pagina de configuracao", () => {
  test("deve ser renderizado corretamnete", () => {
    const { container } = render(
      <RecoilRoot>
        <Configuracao />
      </RecoilRoot>
    );
    expect(container).toMatchSnapshot();
  });
});
