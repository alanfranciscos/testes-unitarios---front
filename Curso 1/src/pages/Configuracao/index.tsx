import Formulario from "../../components/Formulario";
import { Layout } from "../../components/Layout";
import { ListaParticipantes } from "../../components/ListaParticipantes/ListaParticipantes";
import { Rodape } from "../../components/Rodape";
import { Container } from "./styles";

export const Configuracao = () => {
  return (
    <Container>
      <Layout>
        <Formulario />
        <ListaParticipantes />
        <Rodape />
      </Layout>
    </Container>
  );
};
