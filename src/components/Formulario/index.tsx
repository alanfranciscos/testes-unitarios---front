import React, { useRef, useState } from "react";
import { useAdicionarParticipante } from "../../state/hook/useAdicionarPaticipante";
import { useMensagemDeErro } from "../../state/hook/useMensagemDeErro";
import { Alert, Container, InputContainer } from "./styles";

const Formulario = () => {
  const [nome, setNome] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const adicionarNaLista = useAdicionarParticipante();

  const mensagemDeErro = useMensagemDeErro();

  const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
    evento?.preventDefault();
    adicionarNaLista(nome);
    setNome("");

    inputRef.current?.focus();
  };

  return (
    <Container>
      <div style={{ margin: "0 auto", width: "max-content" }}>
        <h1>Vamos começar!</h1>
      </div>

      <form onSubmit={adicionarParticipante}>
        <InputContainer>
          <input
            ref={inputRef}
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
            type="text"
            placeholder="Insira os nomes dos participantes"
          />
          <button disabled={!nome}>Adicionar</button>
          {mensagemDeErro ? <Alert role="alert">{mensagemDeErro}</Alert> : null}
        </InputContainer>
      </form>
    </Container>
  );
};

export default Formulario;
