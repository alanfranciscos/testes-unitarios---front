import React, { useRef, useState } from "react";
import { useAdicionarParticipante } from "../../state/hook/useAdicionarPaticipante";
import { useMensagemDeErro } from "../../state/hook/useMensagemDeErro";
import { Button, Container, Input, Title } from "./styles";

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
      <Title>Vamos começar!</Title>
      <form onSubmit={adicionarParticipante}>
        <Input
          ref={inputRef}
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Insira os nomes dos participantes"
        />
        <Button disabled={!nome}>Adicionar</Button>
        {mensagemDeErro ? <p role="alert">{mensagemDeErro}</p> : null}
      </form>
    </Container>
  );
};

export default Formulario;
