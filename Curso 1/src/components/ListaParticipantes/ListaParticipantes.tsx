import { useListaDeParticipantes } from "../../state/hook/useListaDeParticipantes";
import { Content } from "./styles";

export const ListaParticipantes = () => {
  const participantes: string[] = useListaDeParticipantes();

  return (
    <Content>
      <ul>
        {participantes.map((participante) => (
          <li key={participante}>{participante}</li>
        ))}
      </ul>
    </Content>
  );
};
