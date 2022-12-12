import { useNavigate } from "react-router";
import { useListaDeParticipantes } from "../../state/hook/useListaDeParticipantes";
import { useSorteador } from "../../state/hook/useSorteador";
import { Content } from "./styles";
import sacolasImg from "../../assets/sacolas.png";

export const Rodape = () => {
  const participantes = useListaDeParticipantes();
  const navegarPara = useNavigate();

  const sortear = useSorteador();

  const iniciar = () => {
    sortear();
    navegarPara("/sorteio");
  };

  return (
    <Content>
      <button disabled={participantes.length < 3} onClick={iniciar}>
        Iniciar brincadeira
      </button>
      <img src={sacolasImg} alt="Sacolas de compras" />
    </Content>
  );
};
