import logo from "../../assets/logo.png";
import participante from "../../assets/participante.png";
import { Container, Logo, Paricipante } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Logo src={logo} alt="Logo do Sorteador" />
      <Paricipante src={participante} alt="Participante" />
    </Container>
  );
};
